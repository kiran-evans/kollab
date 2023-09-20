import { useEffect, useState } from 'react';
import { Difficulty } from '../../../../models/Post';
import { Tool } from '../../../../models/Tool';
import { getToolsByName } from '../../api/toolsApi';
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
    const [foundTools, setFoundTools] = useState(Array<Tool>());

    // Update the <datalist> for the foundTools whenever the user searches in the search box
    useEffect(() => {
        (async () => {
            const res = await getToolsByName(toolSearchQuery);
            setFoundTools(await res.json());
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
                    <datalist id="foundToolsList">
                        {foundTools.map(tool => (
                            <option value={tool.name} onSelect={() => handleToolSelect(tool)} />
                        ))}
                    </datalist>
                    
                    <div className="tools-list">
                        {post.tools.map(tool => (
                            <div className="tool">
                                <p>{tool.name}</p>
                                <input type="button" value="X" onClick={() => handleRemoveTool(tool)} />
                            </div>
                        ))}
                    </div>
                    <div className="new-tool">
                        <label htmlFor="tool-name">Name:</label>
                        <input type="text" name="tool" id="tool-name" />
                        <input id="add-tool" type="button" value="+" />
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
