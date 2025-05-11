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
