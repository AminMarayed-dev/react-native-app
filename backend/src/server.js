import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { initDB } from "./config/db.js";
// import rateLimiter from "./middelware/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();

const app = express();

// ✅ MUST HAVE: CORS
app.use(cors());

// ✅ JSON BODY PARSER
app.use(express.json());

// ✅ DISABLE RATE LIMITER TEMPORARILY (IMPORTANT FOR ANDROID)
// app.use(rateLimiter);

// ✅ ROUTES
app.use("/api/transactions", transactionsRoute);

// ✅ MUST BE 0.0.0.0 FOR ANDROID EMULATOR
initDB().then(() => {
  app.listen(process.env.PORT, "0.0.0.0", () => {
    console.log(`✅ Server running on port ${process.env.PORT}`);
  });
});
