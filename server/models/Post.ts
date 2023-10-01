import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/pg";
import { RichComment } from "../types/Comment";
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
            comments: Array<RichComment>(),
            tools: this.tools,
            difficulty: this.difficulty,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }

        const user = await UserModel.findByPk(this.author_id);
        richBody.author = user;

        // Construct the RichComments
        for (const c of this.comments) {
            const comment = await CommentModel.findByPk(c);
            if (comment) {
                // Get the User object for the author and push it to the comments array
                const user = await UserModel.findByPk(comment.author_id);
                richBody.comments.push({
                    id: c,
                    author: user ?? null,
                    message: comment.message
                });
            }
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
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: new Array<string>()
    },
    upvotes: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: new Array<string>()
    },
    downvotes: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: new Array<string>()
    },
    comments: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: new Array<string>()
    },
    tools: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        defaultValue: new Array<string>()
    },
    difficulty: {
        type: DataTypes.ENUM,
        values: Object.keys(Difficulty).filter(i => { return isNaN(Number(i)) })
    }
}, {
    sequelize,
    tableName: 'posts'
});