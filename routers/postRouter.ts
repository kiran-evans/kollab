import { Router } from "express";
import { body, param } from "express-validator";
import { createPost, deletePost, getPost, updatePost, upvotePost } from "../controllers/postController";

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
        param('id').notEmpty().isUUID(),
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
    .delete(
        body('idToken').notEmpty().isJWT(),
        deletePost
    );

router.route('/upvote/:id')
    .patch(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        upvotePost
    )

export default router;