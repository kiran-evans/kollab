import './Comments.css'
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";
import NewComment from '../../components/NewComment/NewComment';
import { useParams } from 'react-router-dom';

export default function Comments() {
  const { postId } = useParams()
  // const data = selectPostById(postId);
  // const comments = selectCommentsByPost(postId);
  return (
    <div className="comments">
        {/* <Post data={data} /> */}
        <h2>Comments [{postId}]</h2> 
        <NewComment />
        <div className="comment-list">
            <Comment />
            <Comment />
            <Comment />
        </div>
    </div>
  )
}
