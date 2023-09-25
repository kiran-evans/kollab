import { AppState } from "./stateReducer";

// indirect access state values 

export const selectPosts = (state: AppState) => {
    return state.posts;
}

export const selectTools = (state: AppState) => {
    // create tool[] by getting all tools[] from post, duplicate tool are skipped
    const tools:any[] = []
    state.posts.map(post => {
        post.tools.forEach(postTool => {
            if (!tools.find(tool => tool.name === postTool.name)) {
                tools.push({name: postTool.name, isChecked: false})
            }
        })
    })
    return tools;
}

export const selectPostById = (state : AppState, id: string) => {
    return state.posts.find(post => post.id === id);
}

export const selectPostFiltered = (state : AppState, tools: string[]) => {
    // shows posts that match tools[]
    if (tools.length < 1) {
        return state.posts;
    }
    return state.posts.filter(post => {
        return post.tools.find(tool => tools.includes(tool))
    });
}

export const selectCommentsByPost = (state : AppState, id: string) => {
    return state.comments.find(comment => comment.id == id);
}

