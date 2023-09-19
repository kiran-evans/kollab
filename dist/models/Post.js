"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difficulty = exports.Post = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
/**
 * @type {Object} Post
 * @property {string} id - The UUID of this Post
 * @property {string} author_id - The UUID of the author User of this Post
 * @property {string} title - The title of this Post
 * @property {string} body - The stringified markdown body of this Post
 * @property {string[]} upvotes - UUIDs of the Users who upvoted this Post
 * @property {string[]} downvotes - UUIDs of the Users who downvoted this Post
 * @property {string[]} tools - UUIDs of the Tools which this Post is tagged with
 * @property {Difficulty} difficulty - The Difficulty rating of this Post
 */
class Post extends sequelize_1.Model {
}
exports.Post = Post;
/**
 * The possible level of effort required
 */
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Beginner"] = 0] = "Beginner";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Advanced"] = 2] = "Advanced";
    Difficulty[Difficulty["Expert"] = 3] = "Expert";
})(Difficulty || (exports.Difficulty = Difficulty = {}));
Post.init({
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
    body: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
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
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
    },
    difficulty: {
        type: sequelize_1.DataTypes.ENUM({ values: Object.keys(Difficulty) })
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'posts'
});
