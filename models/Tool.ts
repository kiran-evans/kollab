import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";
import { Tool } from "../types/Tool";

export class ToolModel extends Model implements Tool {
    declare id: string;
    declare name: string;
}
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