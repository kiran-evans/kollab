import { RequestHandler } from "express";
import { Op } from "sequelize";
import { PostModel } from "../models/Post";
import { Tool } from "../models/Tool";
import { UserModel } from "../models/User";

export const createPost = (async (req, res) => {
    try {
        const user = await UserModel.authenticate(req.body.idToken);

        /* 
            Convert the array of Tool objects into an array of
            UUIDs for the relation database.
        */
        const tools = Array<string>();
        req.body.tools.forEach((tool: Tool) => {
            tools.push(tool.id);
        });
        
        const post = await PostModel.create({
            author_id: user.getDataValue('id'),
            title: req.body.title,
            message: req.body.message,
            tools: tools,
            difficulty: req.body.difficulty
        });

        // Send the Post body back in the response
        return res.status(201).json(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getPostById = (async (req, res) => {
    try {
        // Anyone can get a Post by its id
        const post = await PostModel.findByPk(req.params.id);

        // Return status 404 if no Post found with that id
        if (!post) return res.status(404).send();

        // Respond with the Post body as JSON
        return res.status(200).json(post.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

/**
 * Get all posts in the database, using parameters.
 * 
 * @param limit - The number of Posts required.
 * @param offset - Where to start counting from.
 * @param author_id - (Optional) The UUID of the Post's author User
 */
export const getAllPosts = (async (req, res) => {
    try {
        // Get all Posts. If no author_id is queried, get all Posts WHERE author_id NOT null.
        const posts = await PostModel.findAll({
            limit: Number(req.query.limit),
            offset: Number(req.query.offset),
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                author_id: req.query.author_id ?? { [Op.not]: null }
            }
        });

        // Respond with the Post body as JSON
        return res.status(200).json(posts);

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updatePostById = (async (req, res) => {
    try {
        // Authenticate the request
        const user = await UserModel.authenticate(req.body.idToken);

        // Update the Post body only if the User sending the request is the author of the Post
        const [affectedCount, affectedRows] = await PostModel.update({
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

export const deletePostById = (async (req, res) => {
    try {
        const user = await UserModel.authenticate(req.body.idToken);

        // Delete the Post if the User sending the request is the author of the Post
        await PostModel.destroy({
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
        // Authenticate the user
        const user = await UserModel.authenticate(req.body.idToken);

        // Find the post
        const post = await PostModel.findByPk(req.params.id);

        // If there is no Post with that id, respond with status 404
        if (!post) return res.status(404).send();

        // Add or remove the User's id to the Post's 'upvotes' column
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
        const user = await UserModel.authenticate(req.body.idToken);
        const post = await PostModel.findByPk(req.params.id);
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