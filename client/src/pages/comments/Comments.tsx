import { useParams, Navigate } from 'react-router-dom';
import Comment from "../../components/Comment/Comment";
import NewComment from '../../components/NewComment/NewComment';
import './Comments.css';
import { selectPostById } from '../../lib/ContextActions';
import { useContext } from 'react';
import { AppContext } from '../../lib/ContextProvider';
import PostCard from '../../components/PostCard/PostCard';

export default function Comments() {
  const { state } = useContext(AppContext);
  const { postId=null } = useParams();
  
  if (!postId) throw new Error("sss")
  
  const post = selectPostById(state, postId);
  if (!post) return <Navigate to="/404" />
  
  return (
    <div className="comments">
        <PostCard data={post} minimize={true} />
        <NewComment postId={postId} />
        <div className="comment-list">
            {
              post.comments.length > 0 ? 
                post?.comments.map(commentObject => <Comment key={commentObject.id} data={commentObject} />) :
                <h2>No comments</h2>
            }
        </div>
    </div>
  )
}
