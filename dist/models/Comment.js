"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
/**
 * @type {Object} Comment
 * @property {string} id - The UUID of this Comment
 * @property {string} author_id - The UUID of the User who made this Comment
 * @property {string} body - The stringified markdown body of this Comment
 */
class Comment extends sequelize_1.Model {
}
exports.Comment = Comment;
Comment.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    author_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    body: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'posts'
});
