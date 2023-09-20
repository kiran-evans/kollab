import { RequestHandler } from "express";
import { Op } from "sequelize";
import { ToolModel } from "../models/Tool.ts";
import { UserModel } from "../models/User.ts";

/**
 * Creates a Tool.
 * @returns The Tool.
 */
export const createTool = (async (req, res) => {
    try {
        await UserModel.authenticate(req.body.idToken);

        const tool = await ToolModel.create({
            name: req.body.name
        });

        // Respond with the Tool's body as JSON
        return res.status(201).json(tool.toJSON());

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;

/**
 * Get all Tools in the database.
 * 
 * @param name - (Optional) Search the database for Tools with name LIKE this.
 * @returns An array of Tools.
 */
export const getAllTools = (async (req, res) => {
    try {
        // If name is provided, return results of ILIKE.
        // If no name is provided, return results where name NOT null.
        const tools = await ToolModel.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                name: req.query.name ? { [Op.iLike]: req.query.name } : { [Op.not]: null }
            }
        });

        // Respond with Comment body as JSON
        return res.status(200).json(tools);

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;