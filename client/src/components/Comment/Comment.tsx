import { Link } from 'react-router-dom'
import './Comment.css'
import { useContext, useEffect, useState } from 'react'
import { deleteCommentById, getCommentById } from '../../api/commentApi';
import { fb } from '../../lib/firebase';
import { AppContext } from '../../lib/ContextProvider';

export default function Comment({commentId}) {
  const { state } = useContext(AppContext);
  const [commentObject, setCommentObject] = useState({
    author_id: "",
    message: "",
    id: commentId
  });
  const loadFetchedComment = async() => {
    setCommentObject(await getCommentById(commentId))
  }
  useEffect(() => {
    loadFetchedComment()
  },[])
  
  const handleDeleteComment = async () => {
    if (!fb.auth.currentUser || !state.user) return;
    await deleteCommentById(commentId, await fb.auth.currentUser?.getIdToken())
  }
  
  return (
    <div className='comment'>
        <Link className='comment-author' to='/posts/username'>@{commentObject.author_id}</Link>
        <input type="button" value="Edit" />
        <input type="button" value="Delete" onClick={handleDeleteComment} />
        <p className='comment-message'>{commentObject.message}</p>
        {/* showDialog for edit */}
    </div>
  )
}
