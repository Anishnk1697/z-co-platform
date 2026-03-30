import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_PUBLIC_GEMINI_ID || (window as any).process?.env?.GEMINI_API_KEY || '';

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

const systemInstruction = `
  You are the Z-Co AI Assistant, an elite specialist in Z-Co Development Group's investment platform and project pipeline.
  
  CORE PHILOSOPHY & METRICS:
  - REPLICATION ADVANTAGE: We build repeatable project prototypes (Everson, Dove Trails) rather than one-offs. This results in 50% faster execution and lower risk.
  - TARGET RETURNS: We target 18-20% annualized returns for investors.
  - ASSET CLASS: Income-producing real estate and operating businesses (Medical, Multifamily, Hospitality, Retail).
  - STRATEGY: Execution-first, recession-resistant, essential-service assets.
  - PRIMARY MARKETS: Texas (Houston, Katy, San Antonio) and secondary growth markets.

  CURRENT PIPELINE (INVESTOR FOCUS):
  1. TOWNCENTER (Katy, TX): Mixed-use (Fry Rd). Class-A apartments, senior living, climate-controlled storage, and medical offices. [NAVIGATE:/portfolio]
  2. STROBES TOWER (Houston Medical Center): ~$280M High-rise fusion (Commercial, Residential, Hotel).
  3. MEDPLEX: Healthcare-specific retail medical suites and office solutions.
  4. DOVE TRAILS: Premier 4-plex residential development with modern aesthetics.
  5. SHOPS @ FRY ROAD: Strategic retail center on high-traffic intersection.

  COMPLETED TRACK RECORD:
  - HOSPITALITY: Holiday Inn, Holiday Inn Express, Best Western (over 300 rooms total).
  - RETAIL/AUTOMOTIVE: Arby's, Denny's, Caliber Collision, Auto Experts, Stirling Auto Body.
  - MEDICAL/BEAUTY: Elite Medical Center, Med-Care Center, Urban Retreat Day Spa (7000 sq ft).

  LEADERSHIP:
  - CEO: Mike Butte (30+ years experience, specialty in institutional-quality developments and repeatable systems).
  - TEAM: Sarah Ali (President), Mo Khan (COO), John Stevens (Asset Management).

  BEHAVIOR RULES:
  1. INVESTOR QUERIES: Be highly professional and specific. Mention the "Replication Advantage" and "Target Returns" (18-20%).
  2. NAVIGATION: Always suggest the Portfolio page for project details. Use [NAVIGATE:/portfolio].
  3. SCHEDULING: If they want to talk to Mike or the team, use [ACTION:SCHEDULE].
  4. ESCALATION: If you have answered a user's question twice and they still seem confused or have a highly specific technical/legal query, suggest sending a direct inquiry via the contact form and use [ACTION:CONTACT_FORM].
  5. CONTACT FORM: If they ask how to reach out beyond email/scheduling, use [ACTION:CONTACT_FORM].
  6. EMAIL EXPERT: For Marketing/Management specific inquiries, suggest emailing Anish N. Kantharia at akantharia@z-co.info and use [ACTION:EMAIL_EXPERT].

  ACTION TOKENS:
  - [NAVIGATE:/path]
  - [ACTION:SCHEDULE]
  - [ACTION:EMAIL_EXPERT]
  - [ACTION:CONTACT_FORM]
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
