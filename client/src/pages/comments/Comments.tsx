import { useParams } from 'react-router-dom';
import CommentCard from '../../components/CommentCard/CommentCard';
import NewComment from '../../components/NewComment/NewComment';
import './Comments.css';
import { selectPostById } from '../../lib/ContextActions';
import { useContext } from 'react';
import { AppContext } from '../../lib/ContextProvider';
import PostCard from '../../components/PostCard/PostCard';

export default function Comments() {
  const { state } = useContext(AppContext);
  const { postId=null } = useParams();
  
  if (!postId) throw new Error("PostId Error in Comments.tsx")
  
  const post = selectPostById(state, postId);
  // if (!post) return <Navigate to="/404" />
  if (!post) return <h3>Checking for post ...</h3>
  
  return (
    <div className="comments">
        <PostCard data={post} minimize={true} />
        {state.user?.id && <NewComment postId={postId} />}
        <div className="comment-list">
            {
              post.comments.length > 0 ? 
                post?.comments.map(commendObject => <CommentCard key={commendObject.id} commentData={commendObject} />) :
                <h2>No comments</h2>
            }
        </div>
    </div>
  )
}
