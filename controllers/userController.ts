import { RequestHandler } from "express";
import { User } from "../models/User";

export const createUser = (async (req, res) => {
    try {
        const user = await User.authenticate(req.params.idToken);

        return res.status(201).json(user.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getUser = (async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) return res.status(404).send();

        // Exclude the firebase_id from the returned body
        const { firebase_id, ...body } = user.toJSON();

        return res.status(200).json(body);

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updateUser = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        const [affectedCount, affectedRows] = await User.update({
            ...req.body
        }, {
            where: {
                id: user.id
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

export const deleteUser = (async (req, res) => {
    try {
        const user = await User.authenticate(req.body.idToken);
        await User.destroy({
            where: {
                id: user.id
            }
        });

        return res.status(204).send();

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;