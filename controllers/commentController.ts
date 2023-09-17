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

        // Respond with the Comment's body as JSON
        return res.status(201).json(comment.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getComment = (async (req, res) => {
    try {
        // Anyone can get a Comment by its id
        const comment = await Comment.findByPk(req.params.id);

        // If not Comment found with that id, respond with status 404
        if (!comment) return res.status(404).send();

        // Respond with Comment body as JSON
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

        // Update the Comment's body if the User who sent the request is the author of the Comment
        const [affectedCount, affectedRows] = await Comment.update({
            ...req.body
        }, {
            where: {
                id: req.params.id,
                author_id: user.id
            },
            returning: true
        });

        // Respond with the result of the update() query
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

        // Delete the Comment if the User who sent the request is the author of the Comment
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