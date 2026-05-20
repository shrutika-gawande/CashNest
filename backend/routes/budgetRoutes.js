import express from "express";
import { get, save } from "../controllers/budgetController.js";

const router = express.Router();

router.get("/",  get);
router.post("/", save);

export default router;