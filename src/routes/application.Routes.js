import { Router } from "express";
import {
    Create,
    GetAll,
    Update,
    Delete,
    Get,
} from "../controllers/application.controller.js";

const router = Router();

// Routes
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Delete);
router.get("/", GetAll);
router.get("/:id", Get);

export default router;