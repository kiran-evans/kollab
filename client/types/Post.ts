import { Comment } from "./Comment";
import { User } from "./User";

export type Post = {
    id: string;
    author: User | null;
    title: string;
    message: string;
    images: Array<string>;
    upvotes: number;
    downvotes: number;
    comments: Array<Comment>;
    tools: Array<string>;
    difficulty: Difficulty;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * The possible level of effort required
 */
export enum Difficulty {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}