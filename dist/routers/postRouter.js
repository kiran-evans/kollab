"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const postController_1 = require("../controllers/postController");
const router = (0, express_1.Router)();
router.route('/')
    .post((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('title').notEmpty().isAlphanumeric(), (0, express_validator_1.body)('message').notEmpty().isAlphanumeric(), (0, express_validator_1.body)('images').isArray(), (0, express_validator_1.body)('tools').isArray(), (0, express_validator_1.body)('difficulty').notEmpty(), postController_1.createPost)
    .get((0, express_validator_1.query)('limit').notEmpty().isNumeric(), (0, express_validator_1.query)('offset').notEmpty().isNumeric(), (0, express_validator_1.query)('author_id').isUUID(), postController_1.getAllPosts);
router.route('/:id')
    .all((0, express_validator_1.param)('id').notEmpty().isUUID())
    .get(postController_1.getPostById)
    .put((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('title').notEmpty().isAlphanumeric(), (0, express_validator_1.body)('body').notEmpty().isString(), postController_1.updatePostById)
    .delete((0, express_validator_1.body)('idToken').notEmpty().isJWT(), postController_1.deletePostById);
router.route('/upvote/:id')
    .patch((0, express_validator_1.param)('id').notEmpty().isUUID(), (0, express_validator_1.body)('idToken').notEmpty().isJWT(), postController_1.upvotePost);
router.route('/downvote/:id')
    .patch((0, express_validator_1.param)('id').notEmpty().isUUID(), (0, express_validator_1.body)('idToken').notEmpty().isJWT(), postController_1.downvotePost);
exports.default = router;
