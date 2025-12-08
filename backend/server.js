import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import rateLimiter from "./middelware/rateLimiter.js";

import transactionsRoute from "./routes/transactionsRoute.js"

dotenv.config();

const app = express();

// middelware
app.use(rateLimiter)
app.use(express.json());

// app.use((req, res, next) => {
//   console.log("hey whats up", req.method);
//   next();
// });

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions(
        id SERIAL PRIMARY KEY, 
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`;
    console.log("database initilize successfully");
  } catch (error) {
    console.log("error initilize successfully", error);
    process.exit(1);
  }
}


app.use("/api/transactions", transactionsRoute);



// app.get("/", (req, res) => {
//   res.send("it's working");
// });

initDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is up and running");
  });
});
