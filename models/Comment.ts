import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

export type Comment = {
    id: string;
    author_id: string;
    message: string;
}

export class CommentModel extends Model {}
CommentModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    author_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'posts'
});