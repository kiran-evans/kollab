
export type Post = {
    id: string;
    author_id: string;
    title: string;
    message: string;
    images: Array<string>;
    upvotes: number;
    downvotes: number;
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
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}