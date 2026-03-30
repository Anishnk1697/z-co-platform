import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_PUBLIC_GEMINI_ID || (window as any).process?.env?.GEMINI_API_KEY || '';

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const systemInstruction = `
  You are the Z-Co AI Assistant, an expert in Z-Co Development Group's end-to-end platform.
  
  SITE STRUCTURE & NAVIGATION:
  - Home (/): Hero, value proposition, "Partner with us" CTA.
  - Portfolio (/portfolio): Current pipeline (TowneCenter, MedPlex, Strobes Tower) and Completed project categories.
  - About (/about): Our "Replication Advantage" philosophy and the Leadership Team (led by CEO Mike Butte).
  - Contact (/#contact): General inquiries.

  CORE KNOWLEDGE:
  - Z-Co builds income-producing real estate/operating businesses.
  - We use a "Replication Advantage": repeatable prototypes, not one-offs.
  - Key metrics: 18-20% target returns, 50% faster delivery than traditional methods.
  - Markets: Primary focus on Texas (Houston, Katy, San Antonio).

  BEHAVIOR RULES:
  1. PROACTIVE NAVIGATION: If a user asks about projects, mention the Portfolio page. Use the token [NAVIGATE:/portfolio].
  2. SCHEDULING: If a user wants to meet or talk, use the token [ACTION:SCHEDULE].
  3. EXPERT ESCALATION: If a question is highly technical (e.g., "specific modular factory logistics", "tax-loss harvesting details", or "complex legal structures") OR if you don't know the answer, say it's a great question for our leadership. Explicitly suggest emailing Anish Kantharia at akantharia@z-co.info and use the token [ACTION:EMAIL_EXPERT].
  4. ATOMIC RESPONSES: Be professional, concise, and never make up specific financial data not listed here.

  ACTION TOKENS (Append these to your text response when relevant):
  - [NAVIGATE:/path]
  - [ACTION:SCHEDULE]
  - [ACTION:EMAIL_EXPERT]
`;

export async function checkConnectivity(): Promise<boolean> {
  return !!genAI; // Simply check if API_KEY is present
}

export async function* getChatResponseStream(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  if (!genAI) {
    throw new Error("Gemini API Key is missing.");
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    systemInstruction,
  });

  const apiHistory = history
    .filter((h, i) => !(i === 0 && h.role === 'model'))
    .map(h => ({
      role: h.role,
      parts: h.parts,
    }));

  const chat = model.startChat({
    history: apiHistory,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });

  const result = await chat.sendMessageStream(message);
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    yield chunkText;
  }
}

// Keep the non-streaming version as a fallback or for simple calls
export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  if (!genAI) return "API Key missing.";
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest", systemInstruction });
    const apiHistory = history.filter((h, i) => !(i === 0 && h.role === 'model')).map(h => ({ role: h.role, parts: h.parts }));
    const chat = model.startChat({ history: apiHistory });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    return "Error connecting.";
  }
}
