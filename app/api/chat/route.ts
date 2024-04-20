import { NextRequest, NextResponse } from "next/server";

import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";

const OllamaHost = `http://${process.env.OLLAMA_HOST}:${process.env.OLLAMA_PORT}`;

type Data = {
  name: string;
};

export async function GET(req: NextRequest) {
  // res.status(200).json({ name: "Agent Friday" });
  return NextResponse.json({ name: "AGENT Friday" });
}

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const model = new ChatOllama({
    baseUrl: OllamaHost,
    model: "qwen:14b",
    // model: "llama3:instruct",
  });

  const stream = await model.pipe(new StringOutputParser()).stream(message);

  // Translate "I love programming" into Chinese.

  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  console.log(chunks.join(""));

  return NextResponse.json({ message, response: chunks.join("") });
}
