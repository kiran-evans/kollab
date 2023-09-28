import { Comment } from "../../types/Comment";

/**
 * Creates a Comment object in the database.
 * 
 * @param message - The message of the Comment to be created.
 * @param postId - The id of the Post on which this Comment is being added.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise containing the data for the created Comment.
 */
export const createComment = async (message: string, postId: string, idToken: string): Promise<Comment> => {

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/comment`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            message,
            postId,
            idToken
        })
    });

    if (!res.ok) {
        throw res.statusText;
    }

    return await res.json();
}

/**
 * Gets a Comment by its id.
 * 
 * @param commentId - The id of the Comment to be fetched.
 * @returns A Promise containing a Comment.
 */
export const getCommentById= async (commentId: string): Promise<Comment> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/comment/${commentId}`);
    if (!res.ok) {
        throw res.statusText;
    }
    return await res.json();
}

/**
 * Deletes a Comment by its id. Will throw an error if the User is not authorised to delete this Comment.
 * 
 * @param commentId - The id of the Comment to be deleted.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise. This Promise does not contain any data.
 */
export const deleteCommentById = async (commentId: string, idToken: string): Promise<void> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/comment/${commentId}`, {
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

    return;
}

/**
 * Updates a Comment and returns the updated version.
 * 
 * @param commentId - The id of the Comment to be updated.
 * @param message - The message of the Comment to be updated.
 * @param idToken - The idToken of the logged in Firebase Auth User.
 * @returns A Promise containing the updated Comment
 */
export const updateCommentById = async (commentId: string, message: string, idToken: string): Promise<Comment> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/comment/${commentId}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            idToken,
            message
        })
    });

    if (!res.ok) {
        throw res.statusText;
    }

    return await res.json();
}