import { RequestHandler } from "express";
import { Op } from "sequelize";
import { Tool } from "../models/Tool";

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
        const tools = await Tool.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                name: req.query.name ? { [Op.iLike]: req.query.name } : { [Op.not]: null }
            }
        });

        // If querying by name and no Tools are found, create a new Tool with that name
        if (req.query.name && tools.length === 0) {
            const tool = await Tool.create({
                name: String(req.query.name).toLowerCase()
            });

            return res.status(201).json([tool.toJSON()]);
        }

        // Respond with Comment body as JSON
        return res.status(200).json(tools);

    } catch (err: any) {
        res.statusMessage = err;
        res.status(500).send();
        console.error(err);
    }
}) satisfies RequestHandler;