import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { DEFAULT_MODEL, MODEL } from "../utils/index.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateResponse(prompt, model = DEFAULT_MODEL) {
  try {
    const respone = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return respone.text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}
