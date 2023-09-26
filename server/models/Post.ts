import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";
import { Difficulty, Post } from "../types/Post";

export class PostModel extends Model implements Post {
    declare id: string;
    declare author_id: string;
    declare title: string;
    declare message: string;
    declare images: Array<string>;
    declare upvotes: Array<string>;
    declare downvotes: Array<string>;
    declare comments: Array<string>;
    declare tools: Array<string>;
    declare difficulty: Difficulty;
    declare createdAt: Date;
    declare updatedAt: Date;
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
    images: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
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
        type: DataTypes.ENUM,
        values: Object.keys(Difficulty).filter(i => { return isNaN(Number(i)) })
    }
}, {
    sequelize,
    tableName: 'posts'
});