"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteComment = exports.updateComment = exports.getComment = exports.createComment = void 0;
const Comment_1 = require("../models/Comment");
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
exports.createComment = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const comment = await Comment_1.CommentModel.create({
            author_id: user.id,
            body: req.body.body
        });
        const post = await Post_1.PostModel.findByPk(req.body.post_id);
        if (!post)
            throw `No Post exists with id=${req.body.post_id}.`;
        post.comments.push(comment.id);
        await post.save();
        return res.status(201).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.getComment = (async (req, res) => {
    try {
        const comment = await Comment_1.CommentModel.findByPk(req.params.id);
        if (!comment)
            return res.status(404).send();
        return res.status(200).json(comment.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.updateComment = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await Comment_1.CommentModel.update({
            ...req.body
        }, {
            where: {
                id: req.params.id,
                author_id: user.id
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
exports.deleteComment = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        await Comment_1.CommentModel.destroy({
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
});
