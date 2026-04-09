import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.config.js";
import { globalErrorHandler } from "./utils/index.js";
// import { ai } from "./config/gemini.config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

await connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
