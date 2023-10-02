import { RequestHandler } from "express";
import { CommentModel } from "../models/Comment";
import { PostModel } from "../models/Post";
import { UserModel } from "../models/User";
/**
 * Creates a Comment and then adds the Comment's UUID to the related Post's 'comments' column.
 */
export const createComment = (async (req, res) => {
    try {
        const user = await UserModel.authenticate(req.body.idToken);

        const comment = await CommentModel.create({
            author_id: user.id,
            message: req.body.message
        });

        const post = await PostModel.findByPk(req.body.postId);
        if (!post) throw `No Post exists with id=${req.body.postId}.`;

        // Add the new comment to the Post's 'comments' array and save it
        await PostModel.update({
            comments: new Array<string>(...post.comments, comment.id)
        }, {
            where: {
                id: post.id
            }
        });
        
        return res.status(201).send();

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getCommentById = (async (req, res) => {
    try {
        const comment = await CommentModel.findByPk(req.params.id);
        if (!comment) return res.status(404).send();
        
        return res.status(200).json(comment.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updateCommentById = (async (req, res) => {
    try {
        const user = await UserModel.authenticate(req.body.idToken);

        // Update the Comment's body if the User who sent the request is the author of the Comment
        const [affectedCount, affectedRows] = await CommentModel.update({
            message: req.body.message
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

export const deleteCommentById = (async (req, res) => {
    try {
        const user = await UserModel.authenticate(req.body.idToken);

        // Delete the Comment if the User who sent the request is the author of the Comment
        await CommentModel.destroy({
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