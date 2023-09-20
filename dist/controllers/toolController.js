"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTools = exports.createTool = void 0;
const sequelize_1 = require("sequelize");
const Tool_1 = require("../models/Tool");
const User_1 = require("../models/User");
/**
 * Creates a Tool.
 * @returns The Tool.
 */
exports.createTool = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.User.authenticate(req.body.idToken);
        const tool = yield Tool_1.Tool.create({
            name: req.body.name
        });
        // Respond with the Tool's body as JSON
        return res.status(201).json(tool.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
/**
 * Get all Tools in the database.
 *
 * @param name - (Optional) Search the database for Tools with name LIKE this.
 * @returns An array of Tools.
 */
exports.getAllTools = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // If name is provided, return results of ILIKE.
        // If no name is provided, return results where name NOT null.
        const tools = yield Tool_1.Tool.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                name: req.query.name ? { [sequelize_1.Op.iLike]: req.query.name } : { [sequelize_1.Op.not]: null }
            }
        });
        // Respond with Comment body as JSON
        return res.status(200).json(tools);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
