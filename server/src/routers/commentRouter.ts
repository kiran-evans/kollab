import { Router } from "express";
import { body, param } from "express-validator";
import { createComment, deleteCommentById, getCommentById, updateCommentById } from "../controllers/commentController";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('message').notEmpty().isString(),
        body('postId').notEmpty().isUUID(),
        createComment
    );

router.route('/:id')
    .get(
        param('id').notEmpty().isUUID(),
        getCommentById
    )
    .put(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        body('message').notEmpty().isString(),
        updateCommentById
    )
    .delete(
        param('id').notEmpty().isUUID(),
        body('idToken').notEmpty().isJWT(),
        deleteCommentById
    );

export default router;