import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

export type Tool = {
    id: string;
    name: string;
}

export class ToolModel extends Model {}
ToolModel.init({
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