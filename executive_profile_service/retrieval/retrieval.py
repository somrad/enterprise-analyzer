import os

from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain.embeddings import OpenAIEmbeddings
from langchain_openai import ChatOpenAI
from langchain_pinecone import PineconeVectorStore

from langchain import hub
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains.retrieval import create_retrieval_chain

class Retrieval():

    def __init__(self, index_name: str, prompt_template: str='langchain-ai/retrieval-qa-chat' ):
        # self.query = question
        self.embeddings = OpenAIEmbeddings()
        self.llm = ChatOpenAI()
        self.vectorstore = PineconeVectorStore(
            index_name=index_name, embedding=self.embeddings
        )
        self.retrieval_qa_prompt = hub.pull(prompt_template)
    
    def query(self, question: str) -> str:
        self.query = question
        # self.chain = PromptTemplate.from_template(template=self.query) | self.llm
        combined_docs_chain = create_stuff_documents_chain(self.llm, self.retrieval_qa_prompt)
        self.chain = create_retrieval_chain(
            retriever = self.vectorstore.as_retriever(), combine_docs_chain=combined_docs_chain
        )

        result = self.chain.invoke(input={'input': question})
        print(result['answer'])
        return result['answer']



if __name__ == '__main__':
    
    print('Starting Retriever....')
    retriever = Retrieval(os.environ['INDEX_NAME'])
    retriever.query('What is pinecone in machine learning?')

    print('Retriever completed.')

