import { Router } from "express";
import { body, param } from "express-validator";
import { createUser, deleteUser, getUser, updateUser } from "../controllers/userController.ts";

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

router.route('/:id')
    .get(
        param('id').notEmpty().isUUID(),
        getUser
    );

export default router;