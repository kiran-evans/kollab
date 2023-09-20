import { Router } from "express";
import { query } from "express-validator";
import { getAllTools } from "../controllers/toolController";

const router = Router();

router.route('/')
    .get(
        query('name').notEmpty().isAlphanumeric(),
        getAllTools
    );

export default router;