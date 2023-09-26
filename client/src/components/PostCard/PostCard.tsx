import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../types/Post';
import { User } from '../../../types/User';
import { getUserById } from '../../api/userApi';
import { fb } from '../../lib/firebase';
import './PostCard.css';

function PostCard(props: { data: Post }) { // specify type : Post
    const { data } = props;

    const [author, setAuthor] = useState<User>();
    const [images, setImages] = useState(Array<string>());

    useEffect(() => {
        (async () => {
            setAuthor(await getUserById(data.author_id));

            const tempImages = Array<string>();
            for (const i of data.images) {
                const storageRef = ref(fb.storage, i);
                const url = await getDownloadURL(storageRef);
                tempImages.push(url);
            }
            setImages(tempImages);
        })();
        
    }, []);

    return (
        <div className="post">
            <div className="post-head">
                <p>@{author?.username}</p>
                <p>Date: {new Date(data.createdAt).toUTCString()}</p>
                <p>Difficulty: {data.difficulty}</p>
            </div>
            <h3 className='post-title'>
                {data.title}
            </h3>
            <div className="post-tools">
                {data.tools.map(tool => <p key={tool}>{tool}</p>)}
            </div>
            <div className="post-contents">
                <div className="post-images">
                    {images.map((imgUrl, i) => (
                        <img src={imgUrl} key={i} />
                    ))}
                </div>
                <p>{data.message}</p>
                <div className="post-rating">
                    <p>Score: {data.upvotes.length - data.downvotes.length}</p>
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