import express from "express";

import {
  createTransactionByUserId,
  deleteTransactionByUserId,
  getSummeryTransactionsByUserId,
  getTransactionsByUserId,
} from "../controllers/transactionsControllers.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransactionByUserId);

router.delete("/:id", deleteTransactionByUserId);

router.get("/summary/:userId", getSummeryTransactionsByUserId);

export default router;
