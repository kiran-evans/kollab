import { RequestHandler } from "express";
import { Op } from "sequelize";
import { firebase } from "../lib/fb";
import { UserModel } from "../models/User";

export const createUser = (async (req, res) => {
    try {
        // Get auth user object from Firebase Auth
        const decodedIdToken = await firebase.auth().verifyIdToken(req.body.idToken);
        if (!decodedIdToken) {
            throw "Failed to verify idToken.";
        }

        const user = await UserModel.create({
            username: req.body.username,
            firebase_id: decodedIdToken.uid
        });

        return res.status(201).json(user.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const getUser = (async (req, res) => {
    try {
        // Get any user by their id or firebase_id, depending on which one is present in the request query
        const user = await UserModel.findOne({
            where: {
                id: req.query.id ?? { [Op.not]: null },
                username: req.query.username ?? { [Op.not]: null },
                firebase_id: req.query.firebase_id ?? { [Op.not]: null }
            }
        })

        if (!user) return res.status(404).send();

        // Exclude sensitive and irrelevant data from the returned body
        const { firebase_id, createdAt, updatedAt, ...body } = user.toJSON();

        return res.status(200).json(body);

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

export const updateUser = (async (req, res) => {
    try {
        // Authenticate the request first
        const user = await UserModel.authenticate(req.body.idToken);

        // Update the user data if the request comes from the same user
        const [affectedCount, affectedRows] = await UserModel.update({
            ...req.body
        }, {
            where: {
                id: user.getDataValue('id')
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
        // Authenticate the request comes from a valid Firebase Auth user
        const user = await UserModel.authenticate(req.body.idToken);

        // Delete the user if the id matches the one who sent the request
        await UserModel.destroy({
            where: {
                id: user.getDataValue('id')
            }
        });

        return res.status(204).send();

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;