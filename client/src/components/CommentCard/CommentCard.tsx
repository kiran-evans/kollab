import { CircularProgress } from '@mui/material';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteCommentById, getCommentById, updateCommentById } from '../../api/commentApi';
import { getUserById } from '../../api/userApi';
import { AppContext } from '../../lib/ContextProvider';
import { getErrorMessage } from '../../lib/error';
import { fb } from '../../lib/firebase';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import './CommentCard.css';

export const CommentCard = (props: { id: string }) => {
    const { id } = props;
    const { state } = useContext(AppContext);
    const [isFetching, setIsFetching] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    const [comment, setComment] = useState(null as Comment | null);
    const [author, setAuthor] = useState(null as User | null);

    useEffect(() => {
        // Get comment data on load
        (async () => {
            await getCommentData();
        })();
    }, []);

    const getCommentData = async () => {
        const foundComment = await getCommentById(id);            
        if (foundComment) {
            setComment(foundComment);
            const foundAuthor = await getUserById(foundComment.author_id);
            if (foundAuthor) setAuthor(foundAuthor);
        }
        setIsFetching(false);
    }
    
    // Edit Comment
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedCommentMessage, setEditedCommentMessage] = useState(comment ? comment.message : "");

    const handleEditCommentSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!comment) return;
        if (!editedCommentMessage) return;
        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;

        setIsFetching(true);
        
        try {
            const updatedComment = await updateCommentById(comment.id, editedCommentMessage, await fb.auth.currentUser.getIdToken());
            setComment(updatedComment);
        } catch (err) {
            setErrMsg(getErrorMessage(err));
        }
        setEditedCommentMessage("")
        setShowEditForm(false)
        setIsFetching(false);
    }

    // Deleting Comment
    const dialogElement = useRef<HTMLDialogElement>(null);
    const handleDeleteComment = async () => {
        dialogElement.current?.close();
        if (!fb.auth.currentUser || !state.user) return;
        if (!comment) return;
        await deleteCommentById(comment.id, await fb.auth.currentUser?.getIdToken())
    }
    
    return (
        <div className='comment'>
            {isFetching ?
                <CircularProgress />
                :
                comment ?
                    <>
                        <div className="comment-head">
                            {author ? <Link className='comment-author' to={`/user/${author.username}`}>@{author.username}</Link> : <p>User deleted</p>}
                            {comment.createdAt && <p>{new Date(comment.createdAt).toUTCString()}</p>}
                            <div>
                                {/* if not the comment creator this will render an empty div */}
                                {/* is it good to hav an empty div, if no empty div date will be shifted to the right side */}
                                {
                                    ((state.user && author) && (state.user.id === author.id)) &&
                                    <>
                                        <input type="button" value={showEditForm?"Cancel Edit":"Edit"} onClick={() => setShowEditForm(prev => !prev) } />
                                        <input type="button" value="Delete"disabled={isFetching} onClick={() => dialogElement.current?.showModal()} />
                                    </>
                                }
                            </div>
                        </div>

                        {showEditForm ?
                            <form onSubmit={e => handleEditCommentSubmit(e)}>
                                <textarea name="editComment" value={editedCommentMessage} onChange={e => setEditedCommentMessage(e.target.value)}></textarea>
                                <button type="submit" disabled={isFetching}>{isFetching ? <><CircularProgress size={15} />&nbsp;Submitting...</> : <>Submit</>}</button>
                                {errMsg && <ErrorMsg message={errMsg} />}
                            </form>
                            :
                            <p className='comment-message'>{comment.message}</p>
                        }
                    </>
                    :
                    <p>This comment has been deleted.</p>
            }
        
            {/* showDialog for edit */}
            <dialog ref={dialogElement}>
                <h2>Confirm delete</h2>
                <p>Are you sure you want to delete this comment? You cannot undo this action.</p>
                <button className='cancelButton' onClick={() => dialogElement.current?.close()}>Cancel</button>
                <button className='confirmButton' onClick={handleDeleteComment}>Delete</button>
            </dialog>
        </div>
    )
}
