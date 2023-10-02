import { CircularProgress } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useContext, useState } from "react";
import { Post } from "../../../types/Post";
import { createComment } from '../../api/commentApi';
import { AppContext } from '../../lib/ContextProvider';
import { getErrorMessage } from "../../lib/error";
import { fb } from '../../lib/firebase';
import { ErrorMsg } from "../ErrorMsg/ErrorMsg";
import './NewComment.css';

export default function NewComment(props: { post: Post, setPost: Dispatch<SetStateAction<Post>> }) {
    const { post, setPost } = props;
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
            const createdComment = await createComment(commentMessage, post.id, await fb.auth.currentUser.getIdToken());
            // Update the parent post with the new comment
            setPost({ ...post, comments: [...post.comments, createdComment.id] });
        } catch (err) {
            setErrMsg(getErrorMessage(err));
        }

        setShowCommentSection(false)
        setCommentMessage("")
        setIsFetching(false);
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
                        <button type="submit" disabled={isFetching}>{isFetching ? <><CircularProgress size={15} />&nbsp;Submitting...</> : <>Submit</>}</button>
                    </fieldset>
                    {errMsg && <ErrorMsg message={errMsg} />}
                </form>
            )}
            {/* Removed user auth checker as is done in comments.tsx */}
        </div>
    );
}
