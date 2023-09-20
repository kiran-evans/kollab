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
exports.deleteComment = exports.updateComment = exports.getComment = exports.createComment = void 0;
const Comment_1 = require("../models/Comment");
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
/**
 * Creates a Comment and then adds the Comment's UUID to the related Post's 'comments' column.
 * @returns The updated Post.
 */
exports.createComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        const comment = yield Comment_1.Comment.create({
            author_id: user.id,
            body: req.body.body
        });
        const post = yield Post_1.Post.findByPk(req.body.post_id);
        if (!post)
            throw `No Post exists with id=${req.body.post_id}.`;
        // Add the new comment to the Post's 'comments' array and save it
        post.comments.push(comment.id);
        yield post.save();
        // Respond with the Comment's body as JSON
        return res.status(201).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.getComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Anyone can get a Comment by its id
        const comment = yield Comment_1.Comment.findByPk(req.params.id);
        // If not Comment found with that id, respond with status 404
        if (!comment)
            return res.status(404).send();
        // Respond with Comment body as JSON
        return res.status(200).json(comment.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.updateComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        // Update the Comment's body if the User who sent the request is the author of the Comment
        const [affectedCount, affectedRows] = yield Comment_1.Comment.update(Object.assign({}, req.body), {
            where: {
                id: req.params.id,
                author_id: user.id
            },
            returning: true
        });
        // Respond with the result of the update() query
        return res.status(200).send(affectedRows[0].toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.deleteComment = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        // Delete the Comment if the User who sent the request is the author of the Comment
        yield Comment_1.Comment.destroy({
            where: {
                id: req.params.id,
                author_id: user.id
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
