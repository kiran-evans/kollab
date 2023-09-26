import { ViewOptions, ViewOptionsTool } from "../../types/ViewOptions";
import { AppState } from "./stateReducer";

// indirect access state values 

export const selectPosts = (state: AppState, viewOptions: ViewOptions) => {
    let posts = [...state.posts];
    // Sort
    
    // difficulty
    if (viewOptions.difficulty !== '') {
        posts = posts.filter(post => post.difficulty == viewOptions.difficulty)
    }
    
    // Tools
    // creates an array of only checked tools
    const tools = viewOptions.tools.reduce((newArray: ViewOptionsTool[], tool) => {
        if (tool.isChecked) {
            newArray.push(tool)
        }
        return newArray;
    }, [])
    if (tools.length > 0) {
        posts = posts.filter(post => post.tools.find(postTool => tools.includes({ name: postTool, isChecked: false })))
    }
    return posts;
}

export const selectTools = (state: AppState) => {
    // create tool[] by getting all tools[] from post, duplicate tool are skipped
    const tools = Array<ViewOptionsTool>();
    
    if (state.posts.length > 0) {
        state.posts.map(post => {
            post.tools.forEach(postTool => {
                if (!tools.find(tool => tool.name === postTool)) {
                    tools.push({ name: postTool, isChecked: false })
                }
            })
        })
    }
    return tools;
}

export const selectPostById = (state : AppState, id: string) => {
    return state.posts.find(post => post.id === id);
}

export const selectCommentsByPost = (state : AppState, id: string) => {
    return state.comments.find(comment => comment.id == id);
}

