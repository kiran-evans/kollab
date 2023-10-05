import { User } from "./User";

export type Post = {
    id: string;
    author_id: string;
    title: string;
    message: string;
    images: Array<string>;
    upvotes: Array<User["id"]>;
    downvotes:  Array<User["id"]>;
    comments: Array<string>;
    tools: Array<string>;
    difficulty: Difficulty;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * The possible level of effort required
 */
export enum Difficulty {
    All = "",
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}