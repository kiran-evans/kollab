import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

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
export class Post extends Model {
    declare id: string;
    declare author_id: string;
    declare title: string;
    declare body: string;
    declare upvotes: Array<string>;
    declare downvotes: Array<string>;
    declare comments: Array<string>;
    declare tools: Array<string>;
    declare difficulty: Difficulty;
}

/**
 * The possible level of effort required
 */
export enum Difficulty {
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
}

Post.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    author_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    upvotes: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    downvotes: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    tools: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
    },
    difficulty: {
        type: DataTypes.ENUM({ values: Object.keys(Difficulty) })
    }
}, {
    sequelize,
    tableName: 'posts'
});