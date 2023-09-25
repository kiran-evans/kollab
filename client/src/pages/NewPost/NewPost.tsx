import { CircularProgress } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';
import { Difficulty } from '../../../types/Post';
import { createPost } from '../../api/postApi';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import "./NewPost.css";

export default function NewPost() {
    const { state } = useContext(AppContext);

    const initialState = {
        title: "",
        message: "",
        images: Array<File>(),
        tools: Array<string>(),
        difficulty: Difficulty.Beginner
    };
    const [post, setPost] = useState(initialState);
    
    const [newToolName, setNewToolName] = useState("");
    const [isFetching, setIsFetching] = useState(false);

    const handleAddTool = () => {
        // Make sure this tool isn't already in the array of tools for this Post
        if (post.tools.includes(newToolName.toLocaleLowerCase())) return;

        // Add the selected tool to the Post's array of tools
        setPost({ ...post, tools: [...post.tools, newToolName] });
        setNewToolName("");
    }

    const handleRemoveTool = (removeTool: string) => {
        // Remove this tool from the Post's array of Tools
        setPost({ ...post, tools: post.tools.splice(post.tools.indexOf(removeTool), 1) });
    }

    /**
     * Converts the result of the image <input> event into an array of Files.
     * Updates the state with these Files included in the Post.
     */
    const handleAddImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        // If no files have been added
        if (!e.target.files) return;

        const addedImages = Array<File>();
        for (let i = 0; i < e.target.files.length; i++) {
            const thisFile = e.target.files.item(i);

            // If thisFile is empty, skip it
            if (!thisFile) continue;

            // If this file is not an image, skip it
            if (!thisFile.type.includes("image")) continue;
            
            addedImages.push(thisFile);
        }

        // Add these images to the array
        setPost({ ...post, images: [...post.images, ...addedImages] });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFetching(true);

        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;
        
        await createPost(post, await fb.auth.currentUser.getIdToken(), state.user.id);
        setIsFetching(false);
        // Redirect
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <fieldset disabled={isFetching}>
                <legend>New Post</legend>

                <label htmlFor="title">
                    Title:
                    <input type="text" id="title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
                </label>
                <label htmlFor="message">
                    Message:
                    <textarea id="message" value={post.message} onChange={e => setPost({...post, message: e.target.value})} ></textarea>
                </label>

                <fieldset className="difficulty-picker">
                    <legend>Difficulty:</legend>
                    {Object.keys(Difficulty).map(difficulty => (
                        <>
                            <input className="difficulty-radio" type="radio" id={`difficulty-${difficulty}`} />
                            <label className="for-difficulty" htmlFor={`difficulty-${difficulty}`}>
                                {difficulty}
                            </label>
                        </>
                    ))}
                </fieldset>
                <fieldset className="tools-adder">
                    <legend>Tools</legend>

                    <div className="new-tool">
                        <label htmlFor="tool-name">Add tool:</label>
                        <input type="text" id="tool-name" value={newToolName} onChange={e => setNewToolName(e.target.value)} />
                        <input id="add-tool" type="button" value="+" onClick={handleAddTool} />
                    </div>
                    
                    <div className="tools-list">
                        {post.tools.map(tool => (
                            <div className="tool">
                                <p>{tool}</p>
                                <input type="button" value="X" onClick={() => handleRemoveTool(tool)} />
                            </div>
                        ))}
                    </div>
                </fieldset>

                <label htmlFor="add-images">
                    Add Images:
                    <input type="file" name="add-images" id="add-images" accept="image/*" multiple onChange={e => handleAddImage(e)} />
                    {post.images.map(file => (
                        <img src={URL.createObjectURL(file)} alt={file.name} />
                    ))}
                </label>

                <button type="submit">{isFetching ? <><CircularProgress />&nbsp;Submitting...</> : <>Submit</>}</button>
            </fieldset>
        </form>
    );
}
