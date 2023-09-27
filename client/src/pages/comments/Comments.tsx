import { useParams } from 'react-router-dom';
import Comment from "../../components/Comment/Comment";
import NewComment from '../../components/NewComment/NewComment';
import './Comments.css';
import { selectPostById, selectCommentsByPost } from '../../lib/ContextActions';
import { useContext } from 'react';
import { AppContext } from '../../lib/ContextProvider';
import PostCard from '../../components/PostCard/PostCard';

export default function Comments() {
  const { state } = useContext(AppContext);
  const { postId=null } = useParams();
  
  const post = selectPostById(state, postId)
  const comments = selectCommentsByPost(state, postId);
  
  return (
    <div className="comments">
        <PostCard data={post} minimize={true} />
        <NewComment />
        <div className="comment-list">
            {/* {
              comments.map(commentObject => <Comment key={commentObject.id} />)
            } */}
            <Comment />
        </div>
    </div>
  )
}
