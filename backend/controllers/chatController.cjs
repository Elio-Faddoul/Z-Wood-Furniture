require("dotenv").config();
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

module.exports.chatWithBot = async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid text message.",
    });
  }

  try {
    const prompt = `You are a professional wood furniture expert. Answer concisely:
    Question: ${message}
    Answer:`;

    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      maxTokens: 300,
      temperature: 0.7,
    });

    const reply =
      response.generations[0]?.text?.trim() ||
      "I couldn't generate a response. Please try again.";

    res.status(200).json({
      success: true,
      reply: reply,
    });
  } catch (error) {
    console.error("Cohere API Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to process your request",
      error: error.message,
    });
  }
};

/*-------ice catch but very beginner----------

import axios from "axios";

export const chatWithBot = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res
      .status(400)
      .json({ success: false, message: "No message provided" });
  }

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/google/flan-t5-base",
      {
        inputs: `You are a wooden furniture expert. Please answer the following question clearly and in detail:\n\n${message}\n\nAnswer:`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        timeout: 20000,
      }
    );

    const reply =
      response.data?.[0]?.generated_text?.trim() ||
      "Sorry, I couldn't generate a response.";
    res.status(200).json({ success: true, reply });
  } catch (error) {
    console.error(
      "Hugging Face API error:",
      error.response?.data || error.message
    );
    res.status(500).json({
      success: false,
      message: "Failed to get a response from Hugging Face API",
    });
  }
};
*/
