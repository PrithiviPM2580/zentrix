import { GoogleGenAI } from "@google/genai";
import { DEFAULT_MODEL } from "../utils";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function generateResponse(prompt, model = DEFAULT_MODEL) {
  try {
    const respone = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return respone.text;
  } catch (error) {
    throw error;
    console.error("Error generating response:", error);
  }
}
