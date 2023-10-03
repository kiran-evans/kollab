import { Add, Delete } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Difficulty } from '../../../types/Post';
import { createPost } from '../../api/postApi';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import "./NewPost.css";

export default function NewPost() {
    const { state } = useContext(AppContext);
    const navigator = useNavigate();

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

    const handleAddTool = (e: FormEvent) => {
        e.preventDefault();
        
        // Make sure this tool isn't already in the array of tools for this Post
        if (post.tools.includes(newToolName.toLocaleLowerCase())) return;

        // Add the selected tool to the Post's array of tools
        setPost({ ...post, tools: [...post.tools, newToolName] });
        setNewToolName("");
    }

    const handleRemoveTool = (removeTool: string) => {
        // Remove this tool from the Post's array of Tools
        const updatedToolsArray = [...post.tools];
        updatedToolsArray.splice(post.tools.indexOf(removeTool), 1)
        setPost({ ...post, tools: updatedToolsArray });
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

    const handleRemoveImage = (file: File) => {
        const updatedImages = [...post.images];
        updatedImages.splice(updatedImages.indexOf(file), 1)
        setPost({...post, images: updatedImages});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsFetching(true);

        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;
        
        const res = await createPost(post, await fb.auth.currentUser.getIdToken(), state.user.id); // should return post.id
        if (!res) {
            throw Error("Create post failed")
        }
        setIsFetching(false);
        navigator(`/comments/${res.id}`);
    }

    const handleDifficultyCheck = (e) => {
        const checkedDifficulty = e.target.id.split("-")[1];
        setPost(prev => ({...prev, difficulty: checkedDifficulty}));
    }

    return (
        <div id="new-post">
            <form onSubmit={e => handleSubmit(e)}>
                <fieldset id='wrapper' disabled={isFetching}>
                    <legend>New Post</legend>

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" required value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
                    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required value={post.message} onChange={e => setPost({...post, message: e.target.value})} ></textarea>

                    <fieldset className="difficulty-picker">
                        <legend>Difficulty</legend>
                        {Object.values(Difficulty).filter(i => { return isNaN(Number(i)) }).map(difficulty => (
                            <div key={difficulty}>
                                <input className="difficulty-radio" type="radio" id={`difficulty-${difficulty}`} name="difficulty" onClick={handleDifficultyCheck} />
                                <label className="for-difficulty" htmlFor={`difficulty-${difficulty}`}>
                                    {difficulty}
                                </label>
                            </div>
                        ))}
                    </fieldset>
                    <fieldset className="tools-adder">
                        <legend>Tools</legend>

                        <div className="new-tool">
                            <label htmlFor="tool-name">Add tool:</label>
                            <input type="text" id="tool-name" value={newToolName} onChange={e => setNewToolName(e.target.value)} />
                            <button id="add-tool" type="button" onClick={handleAddTool}><Add /></button>
                        </div>
                        
                        <div className="tools-list">
                            {post.tools.map(tool => (
                                <div key={tool} className="tool">
                                    <p>{tool}</p>
                                    <input type="button" value="X" onClick={() => handleRemoveTool(tool)} />
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    <label htmlFor="add-images">Add Images:</label>
                    <input type="file" name="add-images" id="add-images" accept="image/*" multiple onChange={e => handleAddImage(e)} />
                    <div id="image-list">
                        {post.images.map(file => (
                            <div className="image-card" key={file.name}>
                                <img width="200px" src={URL.createObjectURL(file)} alt={file.name} />
                                <span className='remove-image' title="Remove image" onClick={() => handleRemoveImage(file)}><Delete /></span>
                            </div>
                        ))}
                    </div>

                    <button id="submit-button" type="submit">{isFetching ? <><CircularProgress size={20} />&nbsp;Submitting...</> : <>Submit</>}</button>
                </fieldset>
            </form>

        </div>
    );
}
