import { User } from "./User";

export type Comment = {
    id: string;
    author_id: string;
    message: string;
    createdAt: Date;
}

export type RichComment = {
    id: string;
    author: User | null;
    message: string;
    createdAt: Date;
}