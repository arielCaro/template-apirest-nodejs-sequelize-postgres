import { Router } from "express";
import {
    Create,
    Update,
    Get,
    Delete,
    GetAll
} from "../controllers/role.controller.js";

const router = Router();

router.post("/", Create);
router.put("/:id", Update);
router.delete("/:id", Delete);
router.get("/:id", Get);
router.get("/", GetAll);

export default router;