import { Groq } from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await groq.chat.completions.create({
    model: "mixtral-8x7b-32768",
    messages,
    max_tokens: 1024,
  });

  return Response.json({
    content: response.choices[0]?.message?.content || "",
  });
}
