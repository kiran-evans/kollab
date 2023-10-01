import { User } from "./User";

export type Comment = {
    id: string;
    author: User;
    message: string;
}