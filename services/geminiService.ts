
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: API_KEY });

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

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.parts[0].text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or use our contact form.";
  }
}
