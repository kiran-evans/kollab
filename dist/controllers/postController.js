"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downvotePost = exports.upvotePost = exports.deletePostById = exports.updatePostById = exports.getAllPosts = exports.getPostById = exports.createPost = void 0;
const sequelize_1 = require("sequelize");
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
exports.createPost = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const post = await Post_1.PostModel.create({
            author_id: user.getDataValue('id'),
            title: req.body.title,
            message: req.body.message,
            tools: req.body.tools,
            difficulty: req.body.difficulty
        });
        return res.status(201).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.getPostById = (async (req, res) => {
    try {
        const post = await Post_1.PostModel.findByPk(req.params.id);
        if (!post)
            return res.status(404).send();
        return res.status(200).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.getAllPosts = (async (req, res) => {
    try {
        const posts = await Post_1.PostModel.findAll({
            limit: Number(req.query.limit),
            offset: Number(req.query.offset),
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                author_id: req.query.author_id ?? { [sequelize_1.Op.not]: null }
            }
        });
        return res.status(200).json(posts);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.updatePostById = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await Post_1.PostModel.update({
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
exports.deletePostById = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        await Post_1.PostModel.destroy({
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
exports.upvotePost = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const post = await Post_1.PostModel.findByPk(req.params.id);
        if (!post)
            return res.status(404).send();
        if (post.upvotes.includes(user.id)) {
            const index = post.upvotes.indexOf(user.id);
            post.upvotes.splice(index, 1);
        }
        else {
            post.upvotes.push(user.id);
        }
        await post.save();
        return res.status(200).send(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
exports.downvotePost = (async (req, res) => {
    try {
        const user = await User_1.UserModel.authenticate(req.body.idToken);
        const post = await Post_1.PostModel.findByPk(req.params.id);
        if (!post)
            return res.status(404).send();
        if (post.downvotes.includes(user.id)) {
            const index = post.downvotes.indexOf(user.id);
            post.downvotes.splice(index, 1);
        }
        else {
            post.downvotes.push(user.id);
        }
        await post.save();
        return res.status(200).send(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
});
