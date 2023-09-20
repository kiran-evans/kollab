import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";

export type Post = {
    id: string;
    author_id: string;
    title: string;
    message: string;
    upvotes: Array<string>;
    downvotes: Array<string>;
    tools: Array<string>;
    difficulty: Difficulty;
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

export class PostModel extends Model implements Post {
    declare id: string;
    declare author_id: string;
    declare title: string;
    declare message: string;
    declare upvotes: Array<string>;
    declare downvotes: Array<string>;
    declare comments: Array<string>;
    declare tools: Array<string>;
    declare difficulty: Difficulty;
}
PostModel.init({
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
    message: {
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