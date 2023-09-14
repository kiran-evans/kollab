import { Router } from "express";
import { body, param } from "express-validator";
import { createPost, getPost, updatePost } from "../controllers/postController";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('title').notEmpty().isAlphanumeric(),
        body('body').notEmpty().isString(),
        createPost
    );

router.route('/:id')
    .all(
        param('id').isUUID(),
    )
    .get(
        getPost
    )
    .put(
        body('idToken').notEmpty().isJWT(),
        body('title').notEmpty().isAlphanumeric(),
        body('body').notEmpty().isString(),
        updatePost
    )
    .patch(
        body('idToken').notEmpty().isJWT()
    )
    .delete(
        body('idToken').notEmpty().isJWT()
    );

export default router;