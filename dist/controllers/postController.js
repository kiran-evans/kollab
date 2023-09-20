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
exports.downvotePost = exports.upvotePost = exports.deletePostById = exports.updatePostById = exports.getAllPosts = exports.getPostById = exports.createPost = void 0;
const sequelize_1 = require("sequelize");
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
exports.createPost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        /*
            Convert the array of Tool objects into an array of
            UUIDs for the relation database.
        */
        const tools = Array();
        req.body.tools.forEach((tool) => {
            tools.push(tool.id);
        });
        const post = yield Post_1.Post.create({
            author_id: user.id,
            title: req.body.title,
            message: req.body.message,
            tools: tools,
            difficulty: req.body.difficulty
        });
        // Send the Post body back in the response
        return res.status(201).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.getPostById = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Anyone can get a Post by its id
        const post = yield Post_1.Post.findByPk(req.params.id);
        // Return status 404 if no Post found with that id
        if (!post)
            return res.status(404).send();
        // Respond with the Post body as JSON
        return res.status(200).json(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
/**
 * Get all posts in the database, using parameters.
 *
 * @param limit - The number of Posts required.
 * @param offset - Where to start counting from.
 * @param author_id - (Optional) The UUID of the Post's author User
 */
exports.getAllPosts = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Get all Posts. If no author_id is queried, get all Posts WHERE author_id NOT null.
        const posts = yield Post_1.Post.findAll({
            limit: Number(req.query.limit),
            offset: Number(req.query.offset),
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                author_id: (_a = req.query.author_id) !== null && _a !== void 0 ? _a : { [sequelize_1.Op.not]: null }
            }
        });
        // Respond with the Post body as JSON
        return res.status(200).json(posts);
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.updatePostById = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Authenticate the request
        const user = yield User_1.User.authenticate(req.body.idToken);
        // Update the Post body only if the User sending the request is the author of the Post
        const [affectedCount, affectedRows] = yield Post_1.Post.update(Object.assign({}, req.body), {
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
exports.deletePostById = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        // Delete the Post if the User sending the request is the author of the Post
        yield Post_1.Post.destroy({
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
exports.upvotePost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Authenticate the user
        const user = yield User_1.User.authenticate(req.body.idToken);
        // Find the post
        const post = yield Post_1.Post.findByPk(req.params.id);
        // If there is no Post with that id, respond with status 404
        if (!post)
            return res.status(404).send();
        // Add or remove the User's id to the Post's 'upvotes' column
        if (post.upvotes.includes(user.id)) {
            // If the user has already upvoted this post, remove the upvote
            const index = post.upvotes.indexOf(user.id);
            post.upvotes.splice(index, 1);
        }
        else {
            // Else, add them to the list of upvotes
            post.upvotes.push(user.id);
        }
        yield post.save();
        return res.status(200).send(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
exports.downvotePost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        const post = yield Post_1.Post.findByPk(req.params.id);
        if (!post)
            return res.status(404).send();
        if (post.downvotes.includes(user.id)) {
            // If the user has already downvoted this post, remove the downvote
            const index = post.downvotes.indexOf(user.id);
            post.downvotes.splice(index, 1);
        }
        else {
            // Else, add them to the list of downvotes
            post.downvotes.push(user.id);
        }
        yield post.save();
        return res.status(200).send(post.toJSON());
    }
    catch (err) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}));
