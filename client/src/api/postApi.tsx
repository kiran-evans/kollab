// getAllPosts
// getPostsByUser
// getSavePosts
// updatePostById
// commentOnPostById
// deletePostById
// savePostById

import { Difficulty, Post } from "../../types/Post";
import { Tool } from "../../types/Tool";

/**
 * Creates a Post object in the database.
 * 
 * @param postBody - The body of the Post to be created.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise containing the data for the created Post.
 */
export const createPost = async (postBody: {
    title: string,
    message: string,
    images: Array<File>,
    tools: Array<Tool>,
    difficulty: Difficulty
}, idToken: string): Promise<Post> => {
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ idToken, ...postBody })
    });

    if (!res.ok) {
        throw Error(res.statusText);
    }

    return await res.json();
}