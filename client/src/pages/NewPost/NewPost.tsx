import { useState } from 'react';
import { Difficulty } from '../../../../models/Post';
import "./NewPost.css";

export default function NewPost() {

    const initialState = {
        title: "",
        body: "",
        tools: Array<string>(),
        difficulty: Difficulty.Beginner
    };
    const [post, setPost] = useState(initialState);
    
    const [toolSearchQuery, setToolSearchQuery] = useState("");

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
                    <div className="tools-list">
                        <div className="tool">
                            <p>NodeJs</p>
                            <input type="button" value="X" />
                        </div>
                        <div className="tool">
                            <p>Typescript</p>
                            <input type="button" value="X" />
                        </div>
                        <div className="tool">
                            <p>expressJs</p>
                            <input type="button" value="X" />
                        </div>
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
