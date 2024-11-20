import { Router } from "express";
import {
    Create,
    GetAll,
    Update,
    Delete,
    Get,
} from "../controllers/user.controller.js";
import { verifyToken } from "../security/security.js";

const router = Router();

// Routes
router.post("/", verifyToken, Create);
router.put("/:id", verifyToken, Update);
router.delete("/:id", verifyToken, Delete);
router.get("/", verifyToken, GetAll);
router.get("/:id", verifyToken, Get);

export default router;