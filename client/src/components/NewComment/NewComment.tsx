import { CircularProgress } from "@mui/material";
import { FormEvent, useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { createComment } from '../../api/commentApi';
import { AppContext } from '../../lib/ContextProvider';
import { getErrorMessage } from "../../lib/error";
import { fb } from '../../lib/firebase';
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './NewComment.css';

export default function NewComment({postId}) {
    const { state } = useContext(AppContext);
    const [showCommentSection, setShowCommentSection] = useState(false);
    const [commentMessage, setCommentMessage] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    
    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        
        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;

        setIsFetching(true);

        try {
            await createComment(commentMessage, postId, await fb.auth.currentUser.getIdToken());

        } catch (err) {
            setErrMsg(getErrorMessage(err));
        }

        setShowCommentSection(false)
        setCommentMessage("")
        setIsFetching(false);
    }
    return (
        <div className="new-comment">
            {state.user ? 
                <>
                <input type="button" value={showCommentSection?"Cancel":"New comment"} onClick={() => setShowCommentSection((prev) => !prev)} />
                {showCommentSection && (
                    <form id="new-comment-form" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>New Comment</legend>
                            <label htmlFor="new-comment">Comment Message:</label>
                            <textarea name="new-comment" id="new-comment" value={commentMessage} onChange={e => setCommentMessage(e.target.value)}></textarea>
                                <button type="submit" disabled={isFetching}>{isFetching ? <><CircularProgress size={15} />&nbsp;Submitting...</> : <>Submit</>}</button>
                        </fieldset>
                        {errMsg && <ErrorMsg message={errMsg} />}
                    </form>
                )}
                </>
                :
                <p>You must be logged in to comment. <Link to="/login">Login</Link></p>
            }
        </div>
    );
}
