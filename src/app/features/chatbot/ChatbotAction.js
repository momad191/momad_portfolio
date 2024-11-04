"use server";
import { ChatOpenAI } from "@langchain/openai";
export default async function ChatbotAction(text1) {
  const llm = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
    temperature: 0,
  });

  const result = await llm.invoke([{ role: "user", content: text1 }]);

  return result.content;
}
