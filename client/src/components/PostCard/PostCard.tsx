import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../types/Post';
import { User } from '../../../types/User';
import { getUserById } from '../../api/userApi';
import { fb } from '../../lib/firebase';
import './PostCard.css';
import { deletePostById } from '../../api/postApi';

function PostCard(props: { data: Post, minimize: boolean| undefined }) { // specify type : Post
    // minimize should be true to render less elements ""
    const [confirmDelete, setConfirmDelete] = useState(false);
    const { data, minimize=false } = props;

    const [author, setAuthor] = useState<User>();
    const [images, setImages] = useState(Array<string>());

    const handlePostDelete = async () => {
        setTimeout(() => setConfirmDelete(true), 500); // prevent misfire if double clicked by delaying state switch
        const cancelTimeout = setTimeout(() => setConfirmDelete(false), 3000); // resets confirmDelete after 3s if not clicked for the second time
        if (confirmDelete) {
            clearTimeout(cancelTimeout); // cancel the timeout of delete is clicked again
            setConfirmDelete(false)

            const res = await deletePostById(data.id, await fb.auth.currentUser?.getIdToken())
            if (!res) throw new Error("Failed to delete post")
        }
    }

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
                <Link to={`/${author?.username}`}>@{author?.username}</Link>
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
                {minimize || <Link className='button' to={`/post/${data.id}`}>Comments</Link>}
                <input type="button" value="Update" />
                <input type="button" value={!confirmDelete?"Delete":"Click Again to delete"} onClick={() => handlePostDelete()} />
                <input type="button" value="Save" />
            </div>
        </div>
    )
}

export default PostCard