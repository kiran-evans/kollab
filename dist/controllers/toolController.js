"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTools = exports.createTool = void 0;
const sequelize_1 = require("sequelize");
const Tool_1 = require("../models/Tool");
const User_1 = require("../models/User");
exports.createTool = (async (req, res) => {
    try {
        await User_1.UserModel.authenticate(req.body.idToken);
        const tool = await Tool_1.ToolModel.create({
            name: req.body.name
        });
        return res.status(201).json(tool.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.getAllTools = (async (req, res) => {
    try {
        const tools = await Tool_1.ToolModel.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                name: req.query.name ? { [sequelize_1.Op.iLike]: req.query.name } : { [sequelize_1.Op.not]: null }
            }
        });
        return res.status(200).json(tools);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
