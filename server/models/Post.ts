import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";
import { Comment } from "../types/Comment";
import { Difficulty, Post, RichPost } from "../types/Post";
import { User } from "../types/User";
import { CommentModel } from "./Comment";
import { UserModel } from "./User";

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

    /**
     * Gets all the additional data associated with this Post
     * and combines it into a single object.
     */
    public getRichBody = async (): Promise<RichPost> => {
        const richBody = {
            id: this.id,
            author: null as User | null,
            title: this.title,
            message: this.message,
            images: this.images,
            upvotes: this.upvotes.length,
            downvotes: this.downvotes.length,
            comments: Array<Comment>(),
            tools: this.tools,
            difficulty: this.difficulty,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }

        const user = await UserModel.findByPk(this.author_id);
        richBody.author = user;

        for (const c of this.comments) {
            const comment = await CommentModel.findByPk(c);
            if (comment) richBody.comments.push(comment);
        }

        return richBody;
    }
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