import "./NewPost.css";

export default function NewPost() {
    return (
        <form>
            <fieldset>
                <legend>New Post</legend>

                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" id="title" />
                </label>
                <label htmlFor="message">
                    Message:
                    <textarea name="message" id=""></textarea>
                </label>

                <fieldset className="difficulty-picker">
                    <legend>Difficulty:</legend>
                    <input className="difficulty-radio" type="radio" name="difficulty" id="difficulty-beginner" />
                    <label className="for-difficulty" htmlFor="difficulty-beginner">
                        Beginner
                    </label>
                    <input className="difficulty-radio" type="radio" name="difficulty" id="difficulty-intermediate" />
                    <label className="for-difficulty" htmlFor="difficulty-intermediate">
                        Intermediate
                    </label>
                    <input className="difficulty-radio" type="radio" name="difficulty" id="difficulty-advanced" />
                    <label className="for-difficulty" htmlFor="difficulty-advanced">
                        Advanced
                    </label>
                    <input className="difficulty-radio" type="radio" name="difficulty" id="difficulty-expert" />
                    <label className="for-difficulty" htmlFor="difficulty-expert">
                        Expert
                    </label>
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
