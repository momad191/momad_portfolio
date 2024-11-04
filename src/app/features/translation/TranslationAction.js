"use server";
import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

//process.env.OPENAI_API_KEY
export default async function TranslationAction(
  text1,
  languageFrom,
  languageTo
) {
  const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    apiKey: process.env.OPENAI_API_KEY,
  });

  //   const messages = [
  //     new SystemMessage("Translate the following from English into Italian"),
  //     new HumanMessage("hi!"),
  //   ];
  const systemTemplate = `Translate the following {languageFrom} text  into {languageTo}:
   
    
    `;
  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

  //   const promptValue = await promptTemplate.invoke({
  //     language: "italian",
  //     text: "hi",s
  //   });

  const parser = new StringOutputParser();
  const llmChain = promptTemplate.pipe(model).pipe(parser);

  const response = await llmChain.invoke({
    text: text1,
    languageFrom: languageFrom,
    languageTo: languageTo,
  });
  //   const chain = model.pipe(parser);
  //   const response = await chain.invoke(messages);
  return response;
}
