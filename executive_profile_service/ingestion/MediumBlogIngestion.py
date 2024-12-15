from langchain.embeddings import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_pinecone import PineconeVectorStore


class MediumBlogIngestion:
    def __init__(self, filename):
        self.filename = filename

    def load_data(self):
        loader = TextLoader(self.filename)
        document = loader.load()
        return document

    def split_documents(self, document):
        splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
        texts = splitter.split_documents(document)
        # print( [(len(text.page_content), text, "\n \n") for text in texts])
        print( [(len(text.page_content), "\n \n") for text in texts])
        return texts

    def create_embeddings(self, texts):
        embeddings = OpenAIEmbeddings()
        return embeddings

    def push_to_pinecone(self, index_name, embeddings, texts):
        PineconeVectorStore.from_documents(texts, embeddings, index_name=index_name)