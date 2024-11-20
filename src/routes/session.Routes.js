import { Router } from "express";
import {
    Auth,
    Create,
    Update,
    Get,
    Delete
} from "../controllers/session.controller.js";

const router = Router();

router.post("/", Auth);
router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Delete);
router.get("/:id", Get);
router.get("/", GetAll);

export default router;