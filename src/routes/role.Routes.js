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

/**
 * @swagger
 * /Roles/Create:
 *  get:
 *    description: Use to request all Roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post("/", verifyToken, Create);

/**
 * @swagger
 * /Roles/Update/{id}:
 *  get:
 *    description: Use to request all Roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put("/:id", verifyToken, Update);

/**
 * @swagger
 * /Roles/Delete/{id}:
 *  get:
 *    description: Use to request all Roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete("/:id", verifyToken, Delete);

/**
 * @swagger
 * /Roles/{id}:
 *  get:
 *    description: Use to request all Roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/:id", verifyToken, Get);

/**
 * @swagger
 * /Roles:
 *  get:
 *    description: Use to request all Roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", verifyToken, GetAll);

export default router;