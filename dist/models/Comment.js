"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
class CommentModel extends sequelize_1.Model {
}
exports.CommentModel = CommentModel;
CommentModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    author_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'posts'
});
