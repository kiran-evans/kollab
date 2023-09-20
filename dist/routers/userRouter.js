"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.route('/')
    .post((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('username').notEmpty().isAlphanumeric().isLength({ min: 3, max: 15 }), userController_1.createUser)
    .put((0, express_validator_1.body)('idToken').notEmpty().isJWT(), userController_1.updateUser)
    .delete((0, express_validator_1.body)('idToken').notEmpty().isJWT(), userController_1.deleteUser);
router.route('/:id')
    .get((0, express_validator_1.param)('id').notEmpty().isUUID(), userController_1.getUser);
exports.default = router;
