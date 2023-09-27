import { Post } from "../../types/Post";
import { ViewOptions, ViewOptionsTool } from "../../types/ViewOptions";
import { AppState } from "./stateReducer";

// indirect access state values 

export const selectPosts = (state: AppState, viewOptions: ViewOptions, author_id=null) => {
    let posts = [...state.posts];
    // By Author
    if (author_id) {
        // this will filter out post based on username
        console.log(`in ContextActions.ts line:9  \n\tauthor_id needs to be compared with username "${author_id}"`)
        //posts = posts.filter(post => await getUserById(post.author_id) == author_id);
    }

    // Sort
    const sortPosts = (a:Post, b:Post) => {
        switch (viewOptions.sort) {
            case "date":
                return new Date(a.createdAt) < new Date(b.createdAt) ? 1: 0
                break;
            case "title":
                return a.title > b.title ? 1: 0
                break;
            case "upvotes":
                return a.upvotes.length > b.upvotes.length ? 1: 0
                break;
            case "downvotes":
                return a.downvotes.length > b.downvotes.length ? 1: 0
                break;
            case "username":
                return a.author_id > b.author_id? 1: 0
                break;
            default:
                return a.id > b.id? 1: 0
                break;
            
        }
        return 0
    }
    posts = posts.sort(sortPosts)
    // difficulty
    if (viewOptions.difficulty !== '') {
        posts = posts.filter(post => post.difficulty == viewOptions.difficulty)
    }
    
    // Tools
    const checkedTools:string[] = viewOptions.tools.reduce((newArray: string[], tool) => { // creates an array of [names] of only checked tools
        if (tool.isChecked) {
            newArray.push(tool.name)
        }
        return newArray;
    }, [])
    if (checkedTools.length > 0) {
        // since checkedTools[] is an array of tool[name] that are checked
        posts = posts.filter(post => post.tools.find(postTool => checkedTools.includes(postTool)))
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
    return state.posts.find(post => post.id === id) || null;
}

export const selectCommentsByPost = (state : AppState, id: string) => {
    return state.comments.find(comment => comment.id == id) || null;
}