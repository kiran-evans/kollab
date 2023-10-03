// getAllPosts #
// getSavePosts
// updatePostById #
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

/**
 * Gets an Array of Posts.
 * 
 * @param limit - The maximum number of Posts to be fetched.
 * @param offset - Where to start the limit count from.
 * @param author_id - (Optional) Include a User ID to fetch Posts by that User.
 * @returns A Promise containing an Array of zero or more Posts.
 */
export const getAllPosts = async (limit: number, offset: number, author_id?: string): Promise<Array<Post>> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post?limit=${limit}&offset=${offset}&${author_id ? `author_id=${author_id}` : ""}`);
    if (!res.ok) {
        throw res.statusText;
    }
    return await res.json();
}

/**
 * Gets a Post by its id.
 * 
 * @param postId - The id of the Post to be fetched.
 * @returns A Promise containing a Post.
 */
export const getPostById= async (postId: string): Promise<Post> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post/${postId}`);
    if (!res.ok) {
        throw res.statusText;
    }
    return await res.json();
}

/**
 * Deletes a Post by its id. Will throw an error if the User is not authorised to delete this Post.
 * 
 * @param postId - The id of the Post to be deleted.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise. This Promise does not contain any data.
 */
export const deletePostById = async (postId: string, idToken: string): Promise<boolean> => {
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

/**
 * Updates a Post and returns the updated version.
 * 
 * @param postId - The id of the Post to be updated.
 * @param toBeUpdated - The property(ies)/key(s) of the Post to be updated.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise containing the updated Post
 */
export const updatePostById = async (postId: string, toBeUpdated: {
    title?: string;
    message?: string;
    images?: Array<string>;
    upvotes?: Array<string>;
    downvotes?: Array<string>;
    tools?: Array<string>;
    difficulty?: Difficulty;
}, idToken: string): Promise<Post> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/post/${postId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            idToken,
            toBeUpdated
        })
    });

    if (!res.ok) {
        throw res.statusText;
    }

    return await res.json();
}