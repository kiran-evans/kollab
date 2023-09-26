import { Link } from 'react-router-dom';
import { Post } from '../../../types/Post';
import './PostCard.css';

function PostCard(props: { data: Post }) { // specify type : Post
    const { data } = props;
  return (
    <div className="post">
        <div className="post-head">
            <p>@{data.author_id}</p>
            <p>Date:14/09/2023</p>
            <p>Difficulty: {data.difficulty}</p>
            <p>Duration: 12 Days </p>
        </div>
        <h3 className='post-title'>
            {data.title}
        </h3>
        <div className="post-tools">
            {/* {data.tools.map(tool => <p key={tool}>{tool}</p>)} */}
        </div>
        <div className="post-contents">
            {
                data.images &&
                <div className="image">
                <img src="" alt="" />
            </div>}
            <p>{data.message}</p>
            <div className="post-rating">
                <p>Votes: 0</p>
                <input type="button" value="👍" />
                <input type="button" value="👎" />
            </div>
        </div>
        <div className="post-buttons">
            <Link className='button' to={data.id}>Comments</Link>
            <input type="button" value="Update" />
            <input type="button" value="Delete" />
            <input type="button" value="Save" />
        </div>
    </div>
  )
}

export default PostCard