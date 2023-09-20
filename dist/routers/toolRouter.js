"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const toolController_1 = require("../controllers/toolController");
const router = (0, express_1.Router)();
router.route('/')
    .post((0, express_validator_1.body)('idToken').notEmpty().isJWT(), (0, express_validator_1.body)('name').notEmpty().isAlphanumeric(), toolController_1.createTool)
    .get((0, express_validator_1.query)('name').notEmpty().isAlphanumeric(), toolController_1.getAllTools);
exports.default = router;
