"use server";
import { ChatOpenAI } from "@langchain/openai";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { MessagesPlaceholder } from "@langchain/core/prompts";

export default async function ChatbotAction(text1) {
  const llm = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  // 1. Load, chunk and index the contents of the blog to create a retriever.
  const loader = new CheerioWebBaseLoader(
    "https://momad-portfolio-ashen.vercel.app",
    {
      selector: "p, h1, h2, h3, span, div",
    }
  );
  const docs = await loader.load();

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const splits = await textSplitter.splitDocuments(docs);
  const vectorstore = await MemoryVectorStore.fromDocuments(
    splits,
    new OpenAIEmbeddings()
  );
  const retriever = vectorstore.asRetriever();

  // 2. Incorporate the retriever into a question-answering chain.
  // const systemPrompt =
  //   "You are MOMAD AI for question-answering tasks. " +
  //   "Use the following pieces of retrieved context to answer " +
  //   "the question. If you don't know the answer, say that you " +
  //   "don't know. Use three sentences maximum and keep the " +
  //   "answer concise." +
  //   "\n\n" +
  //   "{context}";

  // const prompt = ChatPromptTemplate.fromMessages([
  //   ["system", systemPrompt],
  //   ["human", "{input}"],
  // ]);

  const contextualizeQSystemPrompt =
    // "Given a chat history and the latest user question " +
    // "which might reference context in the chat history, " +
    // "formulate a standalone question which can be understood " +
    // "without the chat history. Do NOT answer the question, " +
    // "just reformulate it if needed and otherwise return it as is." +
    "You are MOMAD AI for question-answering tasks. " +
    "reponse by hello how can I help you, and ask the human about his name. " +
    "also ask the human how he know you from website social media or related firend " +
    "Use the following pieces of retrieved context to answer " +
    "the question. If you don't know the answer, say that you " +
    "don't know. Use three sentences maximum and keep the " +
    "answer concise." +
    "\n\n" +
    "{context}";
  // const contextualizeQPrompt = ChatPromptTemplate.fromMessages([
  //   ["system", contextualizeQSystemPrompt],
  //   new MessagesPlaceholder("chat_history"),
  //   ["human", "{input}"],
  // ]);
  const qaPrompt = ChatPromptTemplate.fromMessages([
    ["system", contextualizeQSystemPrompt],
    new MessagesPlaceholder("chat_history"),
    ["human", "{input}"],
  ]);

  const historyAwareRetriever = await createHistoryAwareRetriever({
    llm,
    retriever,
    rephrasePrompt: qaPrompt,
  });

  // const questionAnswerChain = await createStuffDocumentsChain({
  //   llm,
  //   prompt,
  // });

  const questionAnswerChain2 = await createStuffDocumentsChain({
    llm,
    prompt: qaPrompt,
  });

  // const ragChain = await createRetrievalChain({
  //   retriever,
  //   combineDocsChain: questionAnswerChain,
  // });

  const ragChain2 = await createRetrievalChain({
    retriever: historyAwareRetriever,
    combineDocsChain: questionAnswerChain2,
  });

  const response = await ragChain2.invoke({
    input: text1,
  });
  return response.answer;
}
