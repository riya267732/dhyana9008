
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are HOOP Support, the AI assistant for HOOP, a premium basketball-inspired sportswear brand. 
Tone: Bold, professional, athletic, helpful, and energetic.
Rules:
1. Provide sizing help based on standard athletic fit.
2. Shipping: Free on orders above ₹3000. Standard shipping is ₹150.
3. Returns: 30-day no-questions-asked return policy.
4. Product Focus: HOOP sells Jerseys, Hoodies, Shorts, and Accessories.
5. If you cannot answer a specific order inquiry, advise the user to connect to human support.
6. Keep responses concise but helpful.
`;

export async function getHOOPResponse(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having a bit of trouble reaching the bench. Try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The shot clock ran out! Please try your message again.";
  }
}
