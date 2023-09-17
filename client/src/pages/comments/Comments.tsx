import './Comments.css'
import Comment from "../../components/Comment/Comment";
import Post from "../../components/Post/Post";
import NewComment from '../../components/NewComment/NewComment';

export default function Comments() {
  return (
    <div className="comments">
        <Post />
        <h2>Comments</h2> 
        <NewComment />
        <div className="comment-list">
            <Comment />
            <Comment />
            <Comment />
        </div>
    </div>
  )
}
