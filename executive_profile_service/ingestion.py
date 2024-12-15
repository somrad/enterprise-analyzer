import os
from dotenv import load_dotenv


from ingestion.MediumBlogIngestion import MediumBlogIngestion

# Usage example:


if __name__ == '__main__':
    print('Ingestion Started')

    filename = '/Users/somr/Desktop/code/enterprise-analyzer/executive_profile_service/data_to_ingest/mediumblog.txt'
    ingestion = MediumBlogIngestion(filename)
    document = ingestion.load_data()
    print('splitting...')
    
    texts = ingestion.split_documents(document)
    print('loading embeddings...')
    
    embeddings = ingestion.create_embeddings(texts)
    index_name = os.environ['INDEX_NAME']
    print('pushing to pinecone...')
    
    ingestion.push_to_pinecone(index_name, embeddings, texts)
    print('Ingestion completed, pushed to pinecone...')


    # loader = TextLoader('/Users/somr/Desktop/code/enterprise-analyzer/executive_profile_service/data_to_ingest/mediumblog.txt')
    # document = loader.load()
    # print(document)
    # print('splitting...')
    # splitter = CharacterTextSplitter(chunk_size=1000,chunk_overlap=100)
    # texts = splitter.split_documents(document)

    # print([(len(text.page_content),text, "\n \n") for text in texts])
    # print('loading embeddings...')
    # embeddings = OpenAIEmbeddings()
    # print(embeddings)
    # print('pushing to pinecone...')

    # PineconeVectorStore.from_documents(texts, embeddings, index_name=os.environ['INDEX_NAME'])
    # print('done, pushed to pinecone...')
