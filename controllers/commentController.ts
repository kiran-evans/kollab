import { RequestHandler } from "express";
import { Comment } from "../models/Comment";
import { User } from "../models/User";

export const createComment = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);

        const comment = await Comment.create({
            author_id: user.id,
            body: req.body.body
        });

        return res.status(201).json(comment.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getComment = (async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id);

        if (!comment) return res.status(404).send();

        return res.status(200).json(comment.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updateComment = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await Comment.update({
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

export const deleteComment = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        await Comment.destroy({
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