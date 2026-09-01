const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "frontend")));

app.post("/api/chat", (req, res) => {
  const { message, conversationHistory } = req.body;

  if (!message || typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "Field 'message' is required." });
  }

  res.json({
    reply: "This is a placeholder reply. The AI brain isn't connected yet.",
    conversationHistory: conversationHistory || [],
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
