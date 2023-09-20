import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

/**
 * @type Tool
 * @property {string} id - The UUID of this Tool
 * @property {string} name - The string to be used to represent this Tool
 */
export class Tool extends Model {
    declare id: string;
    declare name: string;
}

Tool.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'tools'
});