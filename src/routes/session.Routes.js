import { Router } from "express";
import {
    Auth,
    Create,
    Update,
    Get,
    Delete
} from "../controllers/session.controller.js";
import { verifyToken } from "../security/security.js";
const router = Router();

router.post("/", Auth);
router.post("/", verifyToken, Create);
router.put("/:id", verifyToken, Update);
router.delete("/:id", verifyToken, Delete);
router.get("/:id", verifyToken, Get);

export default router;