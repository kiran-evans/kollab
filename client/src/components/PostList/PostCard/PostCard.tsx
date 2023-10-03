import { CircularProgress } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../../types/Post';
import { User } from '../../../../types/User';
import { deletePostById } from '../../../api/postApi';
import { getUserById } from '../../../api/userApi';
import { AppContext } from '../../../lib/ContextProvider';
import { getErrorMessage } from '../../../lib/error';
import { fb } from '../../../lib/firebase';
import { ErrorMsg } from '../../ErrorMsg/ErrorMsg';
import './PostCard.css';

function PostCard(props: { data: Post, minimize?: boolean }) { // specify type : Post
    // minimize should be true to render less elements ""
    
    const { data, minimize = false } = props;
    const { state } = useContext(AppContext);
    
    const [images, setImages] = useState(Array<string>());
    const [author, setAuthor] = useState(null as User | null);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const dialogElement = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            // Load the images from the array of urls
            const tempImages = Array<string>();
            for (const i of data.images) {
                const storageRef = ref(fb.storage, i);
                const url = await getDownloadURL(storageRef);
                tempImages.push(url);
            }
            setImages(tempImages);

            const foundAuthor = await getUserById(data.author_id);
            if (foundAuthor) setAuthor(foundAuthor);

            setIsFetching(false);
        })();        
    }, []);

    const handlePostDelete = async () => {
        dialogElement.current?.close();

        // If user is not logged in, cancel this operation
        if (!fb.auth.currentUser) return;

        setIsFetching(true);
        
        try {
            await deletePostById(data.id, await fb.auth.currentUser?.getIdToken());
        } catch (err) {
            setErrorMsg(getErrorMessage(err));
        }

        setIsFetching(false);
    }

    return (
        <div className="post">
            {isFetching ? <CircularProgress /> :
                <>
                    <div className="post-head">
                        {author ? <Link to={`/user/${author.username}`}>@{author.username}</Link> : <>User deleted</>}
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
                            <p>Score: {data.upvotes - data.downvotes}</p>
                            <input type="button" value="👍" />
                            <input type="button" value="👎" />
                        </div>
                    </div>
                    <div className="post-buttons">
                        {minimize || <Link className='button' to={`/comments/${data.id}`}>Comments {data.comments.length}</Link>}
                        {((state.user && author) && (state.user.id === author.id)) &&
                            <>
                            <input type="button" disabled={isFetching} value="Update" />
                            <input type="button" disabled={isFetching} value="Delete" onClick={() => dialogElement.current?.showModal()} />
                            </>
                        }
                        {state.user?.id && <input type="button" disabled={isFetching} value="Save" />}
                    </div>

                    {errorMsg && <ErrorMsg message={errorMsg} />}

                    <dialog ref={dialogElement}>
                        <h2>Confirm delete</h2>
                        <p>Are you sure you want to delete this post? You cannot undo this action.</p>
                        <button className='cancelButton' onClick={() => dialogElement.current?.close()}>Cancel</button>
                        <button className='confirmButton' onClick={handlePostDelete}>Delete</button>
                    </dialog>
                </>
            }
        </div>
    )
}

export default PostCard