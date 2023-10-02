import { CircularProgress } from '@mui/material';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Comment } from '../../../types/Comment';
import { User } from '../../../types/User';
import { deleteCommentById, getCommentById, updateCommentById } from '../../api/commentApi';
import { getUserById } from '../../api/userApi';
import { AppContext } from '../../lib/ContextProvider';
import { getErrorMessage } from '../../lib/error';
import { fb } from '../../lib/firebase';
import { ErrorMsg } from '../ErrorMsg/ErrorMsg';
import './CommentCard.css';

export const CommentCard = (props: { id: string }) => {
    const { id } = props;
    const { state } = useContext(AppContext);
    const [isFetching, setIsFetching] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    const [data, setData] = useState(null as Comment | null);
    const [author, setAuthor] = useState(null as User | null);

    useEffect(() => {
        // Get comment data on load
        (async () => {
            const comment = await getCommentById(id);            
            if (comment) {
                setData(comment);
                const foundAuthor = await getUserById(comment.author_id);
                if (foundAuthor) setAuthor(foundAuthor);
            }
            setIsFetching(false);
        })();
    }, []);
    
    // Edit Comment
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedCommentMessage, setEditedCommentMessage] = useState(data ? data.message : "");

    const handleEditCommentSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!data) return;
        if (!editedCommentMessage) return;
        // If the user is not logged in, cancel this operation.
        if (!fb.auth.currentUser || !state.user) return;

        setIsFetching(true);
        
        try {
            await updateCommentById(data.id, editedCommentMessage, await fb.auth.currentUser.getIdToken());
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
        if (!data) return;
        await deleteCommentById(data.id, await fb.auth.currentUser?.getIdToken())
    }
    
    return (
        <div className='comment'>
            {isFetching ?
                <CircularProgress />
                :
                data ?
                    <>
                        <div className="comment-head">
                            {author ? <Link className='comment-author' to={`/user/${author.username}`}>@{author.username}</Link> : <p>User deleted</p>}
                            {data.createdAt && <p>{new Date(data.createdAt).toUTCString()}</p>}
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
                            <p className='comment-message'>{data.message}</p>
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
