import { CircularProgress } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Difficulty } from '../../../types/Post';
import { Tool } from '../../../types/Tool';
import { createPost } from '../../api/postApi';
import { createNewTool, getToolsByName } from '../../api/toolsApi';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import "./NewPost.css";

export default function NewPost() {
    const { state } = useContext(AppContext);

    const initialState = {
        title: "",
        message: "",
        images: Array<File>(),
        tools: Array<Tool>(),
        difficulty: Difficulty.Beginner
    };
    const [post, setPost] = useState(initialState);
    
    const [toolSearchQuery, setToolSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [foundTools, setFoundTools] = useState(Array<Tool>());

    const [newToolName, setNewToolName] = useState("");

    // Update the <datalist> for the foundTools whenever the user searches in the search box
    useEffect(() => {
        setIsSearching(true);
        (async () => {
            const res = await getToolsByName(toolSearchQuery);
            setFoundTools(await res.json());
            setIsSearching(false);
        })();
    }, [toolSearchQuery]);

    const handleToolSelect = (selectedTool: Tool) => {
        // Make sure this Tool isn't already in the array of Tools for this Post
        if (post.tools.includes(selectedTool)) return;

        // Add the selected Tool to the Post's array of Tools
        setPost({ ...post, tools: [...post.tools, selectedTool] });
    }

    const handleRemoveTool = (removeTool: Tool) => {
        // Remove this tool from the Post's array of Tools
        setPost({ ...post, tools: post.tools.splice(post.tools.indexOf(removeTool), 1) });
    }

    const handleCreateNewTool = async () => {
        // User must be logged in to do this
        if (!fb.auth.currentUser) return;

        // Create the new tool in the db
        const res = await createNewTool(newToolName, await fb.auth.currentUser.getIdToken());
        
        // Add the new tool to the list
        setPost({ ...post, tools: [...post.tools, await res.json()] });

        // Reset the input field
        setNewToolName("");
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
                    <input type="text" name="title" id="title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
                </label>
                <label htmlFor="message">
                    Message:
                    <textarea name="message" id=""></textarea>
                </label>

                <fieldset className="difficulty-picker">
                    <legend>Difficulty:</legend>
                    {Object.keys(Difficulty).map(difficulty => (
                        <>
                            <input className="difficulty-radio" type="radio" name="difficulty" id={`difficulty-${difficulty}`} />
                            <label className="for-difficulty" htmlFor={`difficulty-${difficulty}`}>
                                {difficulty}
                            </label>
                        </>
                    ))}
                </fieldset>
                <fieldset className="tools-adder">
                    <legend>Tools</legend>

                    <label htmlFor='searchTools'>Search Tools</label>
                    <input type="search" list="foundToolsList" name="searchTools" id="searchTools" value={toolSearchQuery} onChange={e => setToolSearchQuery(e.target.value)} />
                    {isSearching && <p><CircularProgress />&nbsp;Searching tools...</p>}
                    <datalist id="foundToolsList">
                        {foundTools.map(tool => (
                            <option value={tool.name} onSelect={() => handleToolSelect(tool)} />
                        ))}
                    </datalist>

                    <div className="new-tool">
                        <p>Can't find the tool you're looking for? Add a new tool.</p>
                        <label htmlFor="tool-name">Name:</label>
                        <input type="text" name="tool" id="tool-name" value={newToolName} onChange={e => setNewToolName(e.target.value)} />
                        <input id="add-tool" type="button" value="+" onClick={handleCreateNewTool} />
                    </div>
                    
                    <div className="tools-list">
                        {post.tools.map(tool => (
                            <div className="tool">
                                <p>{tool.name}</p>
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
