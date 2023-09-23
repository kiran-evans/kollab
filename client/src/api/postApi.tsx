// getAllPosts
// getPostsByUser
// getSavePosts
// updatePostById
// commentOnPostById
// deletePostById
// savePostById

import { ref, uploadBytes } from "firebase/storage";
import { Difficulty, Post } from "../../types/Post";
import { Tool } from "../../types/Tool";
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
    tools: Array<Tool>,
    difficulty: Difficulty
}, idToken: string, userId: string): Promise<Post> => {

    const body = {
        idToken,
        title: postBody.title,
        message: postBody.message,
        images: Array<string>(),
        tools: Array<string>(),
        difficuly: postBody.difficulty
    };

    // Upload each image to Firebase Storage and add their URLs to the body.
    if (postBody.images.length > 0) {
        for (const i of postBody.images) {
            const imgRef = ref(fb.storage, `images/users/${userId}/${i.name}`);
            await uploadBytes(imgRef, i);
            // Store the URL of each image in an array
            body.images.push(imgRef.fullPath);
        }
    }

    // Convert the array of Tool objects into an array of UUIDs for the relation database.
    if (postBody.tools.length > 0) {
        for (const t of postBody.tools) {
            body.tools.push(t.id);
        }
    }

    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        throw Error(res.statusText);
    }

    return await res.json();
}


export const getAllPosts = (async () => {
    // Fake 
    return Promise.resolve([
        {
            id: 'fakefetchstring',
            author_id: 'fake fetch name',
            title: 'string',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, commodi alias ab, rem quidem molestiae vero non reprehenderit illo maiores quasi omnis minima, dolor repellat. Saepe unde numquam illo aperiam!',
            images: ['imagez'],
            upvotes: [],
            downvotes: [],
            tools: ['Node', 'Python', 'Express', 'JavaScript'],
            difficulty: 'Beginner'
        }, {
            id: 'fakefetchsome',
            author_id: 'fake fetch the ssstring',
            title: 'supe user',
            message: 'lorem ipsum',
            images: [],
            upvotes: [],
            downvotes: [],
            tools: ['JavaScript','React','SQL',],
            difficulty: 'Beginner'
        }
    ])

    const res = await fetch('/api/post')
    if (!res.ok) {
        throw Error(res.statusText)
    }
    console.log(res)
    return await res.json();
})