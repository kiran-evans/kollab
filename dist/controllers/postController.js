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
exports.downvotePost = exports.upvotePost = exports.deletePost = exports.updatePost = exports.getPost = exports.createPost = void 0;
const Post_1 = require("../models/Post");
const User_1 = require("../models/User");
exports.createPost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.authenticate(req.body.idToken);
        const post = yield Post_1.Post.create({
            author_id: user.id,
            title: req.body.title,
            body: req.body.body
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
exports.getPost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.updatePost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.deletePost = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
