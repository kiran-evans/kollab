import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

/**
 * @type Comment
 * @property {string} id - The UUID of this Comment
 * @property {string} author_id - The UUID of the User who made this Comment
 * @property {string} body - The stringified markdown body of this Comment
 */
export class Comment extends Model {
    declare id: string;
    declare author_id: string;
    declare body: string;
}

Comment.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    author_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'posts'
});