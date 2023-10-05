import { Router } from "express";
import { body, query } from "express-validator";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/userController";

const router = Router();

// Only the user themselves can perform PUT or DELETE on their data
router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('username').notEmpty().isAlphanumeric().isLength({ min: 3, max: 15 }),
        createUser
    )
    .put(
        body('idToken').notEmpty().isJWT(),
        updateUser
    )
    .delete(
        body('idToken').notEmpty().isJWT(),
        deleteUser
    );

router.route('/')
    .get(
        query('id').isUUID(),
        query('firebase_id').isAlphanumeric(),
        query('username').isAlphanumeric(),
        getUser
    );

export default router;