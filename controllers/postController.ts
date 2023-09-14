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