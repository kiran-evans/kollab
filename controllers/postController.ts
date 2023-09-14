import { RequestHandler } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";

export const createPost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);

        const post = await Post.create({
            author_id: user.id,
            title: req.body.title,
            body: req.body.body
        });

        return res.status(201).json(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getPost = (async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);

        if (!post) return res.status(404).send();

        return res.status(200).json(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updatePost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await Post.update({
            ...req.body
        }, {
            where: {
                id: req.params.id,
                author_id: user.id
            },
            returning: true
        });

        return res.status(200).send(affectedRows[0].toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const deletePost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        await Post.destroy({
            where: {
                id: req.params.id,
                author_id: user.id
            }
        });

        return res.status(204).send();

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const upvotePost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).send();

        if (post.upvotes.includes(user.id)) {
            // If the user has already upvoted this post, remove the upvote
            const index = post.upvotes.indexOf(user.id);
            post.upvotes.splice(index, 1);
        } else {
            // Else, add them to the list of upvotes
            post.upvotes.push(user.id);
        }

        await post.save();

        return res.status(200).send(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const downvotePost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).send();

        if (post.downvotes.includes(user.id)) {
            // If the user has already downvoted this post, remove the downvote
            const index = post.downvotes.indexOf(user.id);
            post.downvotes.splice(index, 1);
        } else {
            // Else, add them to the list of downvotes
            post.downvotes.push(user.id);
        }

        await post.save();

        return res.status(200).send(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;