import { Router } from "express";
import { body, query } from "express-validator";
import { createTool, getAllTools } from "../controllers/toolController";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('name').notEmpty().isString(),
        createTool
    )
    .get(
        query('name').notEmpty().isAlphanumeric(),
        getAllTools
    );

export default router;