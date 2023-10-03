import { Router } from "express";
import { body, param, query } from "express-validator";
import { createPost, deletePostById, downvotePostById, getAllPosts, getPostById, updatePostById, upvotePostById } from "../controllers/postController";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('title').notEmpty().isAlphanumeric(),
        body('message').notEmpty().isAlphanumeric(),
        body('images').isArray(),
        body('tools').isArray(),
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
    .get(
        param('id').notEmpty().isUUID(),
        getPostById
    )
    .put(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        body('toBeUpdated').notEmpty().isObject(),
        updatePostById
    )
    .delete(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        deletePostById
    );

router.route('/upvote/:id')
    .patch(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        upvotePostById
    );

router.route('/downvote/:id')
    .patch(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        downvotePostById
    );

export default router;