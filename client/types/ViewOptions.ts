export type ViewOptions = {
    sort: string;
    difficulty: string;
    tools: Array<ViewOptionsTool>;
}

export type ViewOptionsTool = {
    name: string;
    isChecked: boolean;
}