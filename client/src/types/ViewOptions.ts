import { Difficulty } from "./Post";

export type ViewOptions = {
    sort: string;
    difficulty: Difficulty;
    tools: Array<ViewOptionsTool>;
}

export type ViewOptionsTool = {
    name: string;
    isChecked: boolean;
}