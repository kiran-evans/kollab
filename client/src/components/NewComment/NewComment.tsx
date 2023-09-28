import { createComment } from '../../api/commentApi';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import './NewComment.css'
import { FormEvent, useContext, useState } from "react"

export default function NewComment({postId}) {
    const { state } = useContext(AppContext);
    const [showCommentSection, setShowCommentSection] = useState(false);
    const [commentMessage, setCommentMessage] = useState("")
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        
        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;
        
        const res = await createComment(commentMessage, postId, await fb.auth.currentUser.getIdToken())
        if (!res) {
            throw Error("Create Comment failed")
        }
        setShowCommentSection(false)
        setCommentMessage("")
    }
    return (
        <div className="new-comment">
            <input type="button" value={showCommentSection?"Cancel":"New comment"} onClick={() => setShowCommentSection((prev) => !prev)} />
            {showCommentSection && (
                <form id="new-comment-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>New Comment</legend>
                        <label htmlFor="new-comment">Comment Message:</label>
                        <textarea name="new-comment" id="new-comment" value={commentMessage} onChange={e => setCommentMessage(e.target.value)}></textarea>
                        <input type="submit" value="submit" />
                    </fieldset>
                </form>
            )}
        </div>
    );
}
