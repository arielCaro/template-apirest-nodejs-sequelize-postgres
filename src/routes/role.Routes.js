import { Router } from "express";
import {
    Create,
    Update,
    Get,
    Delete,
    GetAll
} from "../controllers/role.controller.js";
import { verifyToken } from "../security/security.js";

const router = Router();

router.post("/", verifyToken, Create);
router.put("/:id", verifyToken, Update);
router.delete("/:id", verifyToken, Delete);
router.get("/:id", verifyToken, Get);
router.get("/", verifyToken, GetAll);

export default router;