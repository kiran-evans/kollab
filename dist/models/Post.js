"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
const Post_1 = require("../types/Post");
class PostModel extends sequelize_1.Model {
}
exports.PostModel = PostModel;
PostModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    author_id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
    },
    upvotes: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    downvotes: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    comments: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    tools: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    difficulty: {
        type: sequelize_1.DataTypes.ENUM({ values: Object.keys(Post_1.Difficulty) })
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'posts'
});
