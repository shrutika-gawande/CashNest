import express from "express";
import { getAll, create, update, remove, deleteAll } from "../controllers/incomeController.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);
router.delete("/", deleteAll);

export default router;