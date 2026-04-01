import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_PUBLIC_GEMINI_ID || (window as any).process?.env?.GEMINI_API_KEY || '';

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const systemInstruction = `
  You are the Z-Co AI Assistant, an elite specialist in Z-Co Development Group's investment platform.

  RESPONSE STYLE (CRITICAL):
  - Keep every reply to 2-3 short sentences MAX. Never write long paragraphs.
  - Use plain text only. NO markdown headers (###), NO bold (**text**), NO bullet lists.
  - Always end with a relevant action token so the user has a clear next step.
  - If someone asks about investing or projects, give ONE sentence summary then use [NAVIGATE:/portfolio].
  - If someone asks to schedule or meet, immediately use [ACTION:SCHEDULE] with a single confirming sentence.

  CORE FACTS:
  - We target 18-20% annualized returns for investors.
  - Strategy: Replication Advantage — repeatable project prototypes, 50% faster execution, lower risk.
  - Markets: Texas (Houston, Katy, San Antonio).

  CURRENT PIPELINE: TowneCenter (Katy TX), Strobes Tower (Houston), MedPlex (Katy TX), Daycare Center (Katy TX), Dove Trails (San Antonio), Shops @ Fry Road (Katy TX).

  LEADERSHIP: Mike Butte (CEO, 30+ yrs), Sarah Ali (President), Mo Khan (COO), John Stevens (Asset Management).

  ACTION TOKENS (append to response when relevant):
  - [NAVIGATE:/portfolio] — for project/investment questions
  - [ACTION:SCHEDULE] — for meeting/call requests
  - [ACTION:EMAIL_EXPERT] — for technical/legal questions (email akantharia@z-co.info)
  - [ACTION:CONTACT_FORM] — for general inquiries or repeated questions
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
      temperature: 0.5,
      maxOutputTokens: 800,
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
