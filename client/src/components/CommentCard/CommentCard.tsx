import { Link } from 'react-router-dom'
import './CommentCard.css'
import { FormEvent, useContext, useRef, useState } from 'react'
import { deleteCommentById, updateCommentById } from '../../api/commentApi';
import { fb } from '../../lib/firebase';
import { AppContext } from '../../lib/ContextProvider';
import { Comment } from '../../../types/Comment';
import { CircularProgress } from '@mui/material';

export default function CommentCard(props: { commentData: Comment }) {
  const { commentData } = props;
  const { state } = useContext(AppContext);
  const [isFetching, setIsFetching] = useState(false)
  
  // Edit Comment
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedCommentMessage, setEditedCommentMessage] = useState(commentData.message);

  const handleEditCommentSubmit = async (e:FormEvent) => {
    e.preventDefault()
    setIsFetching(true)
    if (editedCommentMessage.length < 1) {
      setIsFetching(false)
      return ; // Soft Error 
    }
    // If the user is not logged in, cancel this operation.
    if (!fb.auth.currentUser || !state.user) return;
    
    try {
      await updateCommentById(commentData.id, editedCommentMessage, await fb.auth.currentUser.getIdToken());
    } catch (err) {
      console.log(err)
    }
    setEditedCommentMessage("")
    setShowEditForm(false)
    setIsFetching(false);
  }

  // Deleting Comment
  const dialogElement = useRef<HTMLDialogElement>(null);
  const handleDeleteComment = async () => {
    dialogElement.current?.close()
    if (!fb.auth.currentUser || !state.user) return;
    await deleteCommentById(commentData.id, await fb.auth.currentUser?.getIdToken())
  }
  
  return (
    <div className='comment'>
      <div className="comment-head">
        <Link className='comment-author' to={`/${commentData.author.username}`}>@{commentData.author.username}</Link>
        {commentData?.createdAt && <p>{commentData?.createdAt}</p>}
        <div>
          {/* if not the comment creator this will render an empty div */}
          {/* is it good to hav an empty div, if no empty div date will be shifted to the right side */}
          {
            (state.user && state.user.username === commentData.author.username) &&
            <>
                <input type="button" value={showEditForm?"Cancel Edit":"Edit"} onClick={() => setShowEditForm(prev => !prev) } />
                <input type="button" value="Delete"disabled={isFetching} onClick={() => dialogElement.current?.showModal()} />
            </>
          }
        </div>
      </div>
        {
          /* Comment.message and edit message */
          !showEditForm?
          <p className='comment-message'>{commentData.message}</p>:
          <form onSubmit={e => handleEditCommentSubmit(e)}>
            <textarea name="editComment" value={editedCommentMessage} onChange={e => setEditedCommentMessage(e.target.value)}></textarea>
            <button type="submit" disabled={isFetching}>{isFetching ? <><CircularProgress size={15} />&nbsp;Submitting...</> : <>Submit</>}</button>
          </form>

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
