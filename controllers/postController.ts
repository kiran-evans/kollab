import { RequestHandler } from "express";
import { Post } from "../models/Post";
import { User } from "../models/User";

export const createPost = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);

        Post.create({
            author_id: user.id,
            title: req.body.title,
            body: req.body.body
        });

        return res.status(201).send();

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
        await Post.update({
            ...req.body
        }, {
            where: {
                author_id: user.id
            }
        });

        return res.status(200).send();

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;