// getAllPosts #
// getSavePosts
// updatePostById
// commentOnPostById
// deletePostById #
// savePostById

import { ref, uploadBytes } from "firebase/storage";
import { Difficulty, Post } from "../../types/Post";
import { fb } from "../lib/firebase";

/**
 * Creates a Post object in the database.
 * 
 * @param postBody - The body of the Post to be created.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @param userId - The UUID of the current User in the AppState.
 * @returns A Promise containing the data for the created Post.
 */
export const createPost = async (postBody: {
    title: string,
    message: string,
    images: Array<File>,
    tools: Array<string>,
    difficulty: Difficulty
}, idToken: string, userId: string): Promise<Post> => {

    const body = {
        idToken,
        title: postBody.title,
        message: postBody.message,
        images: Array<string>(),
        tools: postBody.tools,
        difficulty: postBody.difficulty
    };

    // Upload any images to Firebase Storage and add their URLs to the body.
    if (postBody.images.length > 0) {
        for (const i of postBody.images) {
            const imgRef = ref(fb.storage, `images/users/${userId}/${i.name}`);
            await uploadBytes(imgRef, i);
            // Store the URL of each image in an array
            body.images.push(imgRef.fullPath);
        }
    }    

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        throw res.statusText;
    }

    return await res.json();
}


export const getAllPosts = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post?limit=50&offset=0`)
    if (!res.ok) {
        throw res.statusText;
    }
    return await res.json();
}

export const deletePostById = async (postId: string, idToken: string) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post/${postId}`, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            idToken
        })
    });
    if (!res.ok) {
        throw res.statusText;
    }
    return true;
}