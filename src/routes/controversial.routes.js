import { Router } from "express";
import { getData, vote } from "../controllers/controversial.controller";

const router = Router();

// Get all controverial celebrities items
router.get("/", getData);

// Send vote
router.post("/vote/:id", vote);

export default router;
