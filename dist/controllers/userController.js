"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const sequelize_1 = require("sequelize");
const fb_1 = require("../lib/fb");
const User_1 = require("../models/User");
exports.createUser = (async (req, res) => {
    try {
        const decodedIdToken = await fb_1.firebase.auth().verifyIdToken(req.body.idToken);
        if (!decodedIdToken) {
            throw "Failed to verify idToken.";
        }
        const user = await User_1.UserModel.create({
            username: req.body.username,
            firebase_id: decodedIdToken.uid
        });
        return res.status(201).json(user.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.getUser = (async (req, res) => {
    try {
        const user = await User_1.UserModel.findOne({
            where: {
                id: req.query.id ?? { [sequelize_1.Op.not]: null },
                firebase_id: req.query.firebase_id ?? { [sequelize_1.Op.not]: null }
            }
        });
        if (!user)
            return res.status(404).send();
        const { firebase_id, date_created, date_modified, ...body } = user.toJSON();
        return res.status(200).json(body);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.updateUser = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await User_1.UserModel.update({
            ...req.body
        }, {
            where: {
                id: user.getDataValue('id')
            },
            returning: true
        });
        return res.status(200).send(affectedRows[0].toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.deleteUser = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        await User_1.UserModel.destroy({
            where: {
                id: user.getDataValue('id')
            }
        });
        return res.status(204).send();
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
