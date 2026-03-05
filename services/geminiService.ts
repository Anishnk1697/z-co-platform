
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export async function getChatResponse(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are the Z-Co AI Assistant, an expert in Z-Co Development Group's platform.
    Z-Co is an end-to-end development platform that integrates:
    1. Development: Repeatable prototypes and market-led siting.
    2. Capital: Milestone-linked structures and transparent reporting.
    3. Modular: Factory-enabled builds and predictable timelines.
    
    Our core focus is Houston, San Antonio, and major Texas markets.
    We target 18-20% returns and 50% faster delivery than traditional methods.
    Be professional, concise, and focused on helping potential partners, investors, or operators.
    If asked about investing, refer them to the "Investor Access" section.
    If asked about partnering, refer them to the "Talk to us" form in the contact section.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
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
