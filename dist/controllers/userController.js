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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const User_1 = require("../models/User");
exports.createUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.params.idToken);
        return res.status(201).json(user.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.getUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.findByPk(req.params.id);
        if (!user)
            return res.status(404).send();
        // Exclude the firebase_id from the returned body
        const _a = user.toJSON(), { firebase_id } = _a, body = __rest(_a, ["firebase_id"]);
        return res.status(200).json(body);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.updateUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = yield User_1.User.update(Object.assign({}, req.body), {
            where: {
                id: user.id
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
}));
exports.deleteUser = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        yield User_1.User.destroy({
            where: {
                id: user.id
            }
        });
        return res.status(204).send();
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));