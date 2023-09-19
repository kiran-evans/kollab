import './NewComment.css'
import { useState } from "react"

export default function NewComment() {
    const [showCommentSection, setShowCommentSection] = useState(false)
    return (
        <div className="new-comment">
            <input type="button" value={showCommentSection?"Cancel":"New comment"} onClick={() => setShowCommentSection((prev) => !prev)} />
            {showCommentSection && (
                <form id="new-comment-form">
                    <fieldset>
                        <legend>New Comment</legend>
                        <label htmlFor="new-comment">Comment Message:</label>
                        <textarea name="new-comment" id="new-comment"></textarea>
                        <input type="submit" value="submit" />
                    </fieldset>
                </form>
            )}
        </div>
    );
}
