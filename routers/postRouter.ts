import { Router } from "express";
import { body, param, query } from "express-validator";
import { createPost, deletePostById, downvotePost, getAllPosts, getPostById, updatePostById, upvotePost } from "../controllers/postController.ts";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('title').notEmpty().isAlphanumeric(),
        body('message').notEmpty().isAlphanumeric(),
        body('tools').notEmpty().isArray(),
        body('difficulty').notEmpty(),
        createPost
    )
    .get(
        query('limit').notEmpty().isNumeric(),
        query('offset').notEmpty().isNumeric(),
        query('author_id').isUUID(),
        getAllPosts
    );

router.route('/:id')
    .all(
        param('id').notEmpty().isUUID(),
    )
    .get(
        getPostById
    )
    .put(
        body('idToken').notEmpty().isJWT(),
        body('title').notEmpty().isAlphanumeric(),
        body('body').notEmpty().isString(),
        updatePostById
    )
    .delete(
        body('idToken').notEmpty().isJWT(),
        deletePostById
    );

router.route('/upvote/:id')
    .patch(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        upvotePost
    );

router.route('/downvote/:id')
    .patch(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        downvotePost
    );

export default router;