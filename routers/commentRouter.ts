import { Router } from "express";
import { body, param } from "express-validator";
import { createComment, deleteComment, getComment, updateComment } from "../controllers/commentController";

const router = Router();

router.route('/')
    .post(
        body('idToken').notEmpty().isJWT(),
        body('body').notEmpty().isString(),
        createComment
    );

router.route('/:id')
    .all(
        param('id').notEmpty().isUUID()
    )
    .get(
        getComment
    )
    .put(
        body('idToken').notEmpty().isJWT(),
        body('body').notEmpty().isString(),
        updateComment
    )
    .delete(
        body('idToken').notEmpty().isJWT(),
        deleteComment
    );

export default router;