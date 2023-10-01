import { Link } from 'react-router-dom'
import './Comment.css'
import { useContext } from 'react'
import { deleteCommentById } from '../../api/commentApi';
import { fb } from '../../lib/firebase';
import { AppContext } from '../../lib/ContextProvider';

export default function Comment({commentObject}) {
  const { state } = useContext(AppContext);
  
  const handleDeleteComment = async () => {
    if (!fb.auth.currentUser || !state.user) return;
    await deleteCommentById(commentObject.id, await fb.auth.currentUser?.getIdToken())
  }
  
  return (
    <div className='comment'>
        <Link className='comment-author' to='/posts/username'>@{commentObject.author_id}</Link>
        <input type="button" value="Edit" />
        <input type="button" value="Delete" onClick={() => handleDeleteComment()} />
        <p className='comment-message'>{commentObject.message}</p>
        {/* showDialog for edit */}
    </div>
  )
}
