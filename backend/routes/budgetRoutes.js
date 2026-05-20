import express from "express";
import { get, save, deleteAll } from "../controllers/budgetController.js";

const router = express.Router();

router.get("/",  get);
router.post("/", save);
router.delete("/", deleteAll);

export default router;