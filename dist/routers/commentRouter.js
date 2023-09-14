"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const commentController_1 = require("../controllers/commentController");
const router = (0, express_1.Router)();
router.route('/')
    .post((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('body').notEmpty().isString(), commentController_1.createComment);
router.route('/:id')
    .all((0, express_validator_1.param)('id').notEmpty().isUUID())
    .get(commentController_1.getComment)
    .put((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('body').notEmpty().isString(), commentController_1.updateComment)
    .delete((0, express_validator_1.body)('idToken').notEmpty().isJWT(), commentController_1.deleteComment);
exports.default = router;
