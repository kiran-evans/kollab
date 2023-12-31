import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";
import { Comment } from "../types/Comment";

export class CommentModel extends Model implements Comment {
    declare id: string;
    declare author_id: string;
    declare message: string;
    declare createdAt: Date;
}
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
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'comments'
});