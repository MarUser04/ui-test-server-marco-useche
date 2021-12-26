import { Router } from "express";
import { getData, vote } from "../controllers/controversial.controller";

const router = Router();

router.get("/", getData);

router.post("/vote/:id", vote);

export default router;
