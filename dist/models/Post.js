"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Difficulty = exports.Post = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
class Post extends sequelize_1.Model {
}
exports.Post = Post;
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
