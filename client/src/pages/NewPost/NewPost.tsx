import { useEffect, useState } from 'react';
import { Difficulty } from '../../../types/Post';
import { Tool } from '../../../types/Tool';
import { createNewTool, getToolsByName } from '../../api/toolsApi';
import { fb } from '../../lib/firebase';
import "./NewPost.css";

export default function NewPost() {

    const initialState = {
        title: "",
        body: "",
        tools: Array<Tool>(),
        difficulty: Difficulty.Beginner
    };
    const [post, setPost] = useState(initialState);
    
    const [toolSearchQuery, setToolSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
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

    return (
        <form>
            <fieldset>
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
                    {isSearching && <p>Searching tools...</p>}
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

                <label htmlFor="upload-file">
                    Upload Image:
                    <input type="file" name="upload" id="upload-file" />
                </label>

                <input type="submit" value="Submit" />
            </fieldset>
        </form>
    );
}
