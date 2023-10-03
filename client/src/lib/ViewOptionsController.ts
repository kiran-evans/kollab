import { Post } from "../../types/Post";
import { ViewOptions, ViewOptionsTool } from "../../types/ViewOptions";

export const selectPosts = (postsList: Post[], viewOptions: ViewOptions | null) => {
    if (!viewOptions) return postsList;
    
    let posts:Post[] = [...postsList];

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
                return a.upvotes > b.upvotes ? 1: 0
                break;
            case "downvotes":
                return a.downvotes > b.downvotes ? 1: 0
                break;
            // case "username":
            //     if (a.author && b.author) {
            //         return a?.author?.username > b.author?.username? 1: 0
            //     }
            //     break;
            default:
                return a.id > b.id? 1: 0
                break;
        }
        return 0
    }
    posts = posts.sort(sortPosts)
    // difficulty
    if (viewOptions.difficulty) {
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

export const selectTools = (postsList: Post[]) => {
    // create tool[] by getting all tools[] from post, duplicate tool are skipped
    const tools = Array<ViewOptionsTool>();
    
    if (postsList.length > 0) {
        postsList.map(post => {
            post.tools.forEach(postTool => {
                if (!tools.find(tool => tool.name === postTool)) {
                    tools.push({ name: postTool, isChecked: false })
                }
            })
        })
    }
    return tools;
}