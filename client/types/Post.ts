
export type Post = {
    id: string;
    author_id: string;
    title: string;
    message: string;
    images: Array<string>;
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