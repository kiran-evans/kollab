import { ThumbDown, ThumbUp } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deletePostById, downvotePost, upvotePost } from '../../../api/postApi';
import { getUserById } from '../../../api/userApi';
import { AppContext } from '../../../lib/ContextProvider';
import { getErrorMessage } from '../../../lib/error';
import { fb } from '../../../lib/firebase';
import { Post } from '../../../types/Post';
import { User } from '../../../types/User';
import { ErrorMsg } from '../../ErrorMsg/ErrorMsg';
import './PostCard.css';
import PostCarousel from './PostCarousel/PostCarousel';

function PostCard(props: { data: Post, minimize?: boolean }) { // specify type : Post
    // minimize should be true to render less elements ""
    const navigate = useNavigate()
    const { state } = useContext(AppContext);
    const { data, minimize = false } = props;

    const [postData, setPostData] = useState(data);
    
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
            for (const i of postData.images) {
                const storageRef = ref(fb.storage, i);
                const url = await getDownloadURL(storageRef);
                tempImages.push(url);
            }
            setImages(tempImages);

            const foundAuthor = await getUserById(postData.author_id);
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
            await deletePostById(postData.id, await fb.auth.currentUser?.getIdToken());
        } catch (err) {
            setErrorMsg(getErrorMessage(err));
        }
        if (minimize) { // redirect to home if rendered from /comments/postId
            navigate("/")
        }

        setIsFetching(false);
    }
    const handleUpVote =async () => {
        if (!fb.auth.currentUser) return;
        // setIsFetching(true);
        try {
            const res = await upvotePost(postData.id, await fb.auth.currentUser?.getIdToken())
            setPostData(res)
        } catch (err) {
            setErrorMsg(getErrorMessage(err))
        }
        // setIsFetching(false);
    }
    const handleDownVote =async () => {
        if (!fb.auth.currentUser) return;
        // setIsFetching(true);
        try {
            const res = await downvotePost(postData.id, await fb.auth.currentUser?.getIdToken())
            setPostData(res)
        } catch (err) {
            setErrorMsg(getErrorMessage(err))
        }
        // setIsFetching(false);
    }

    return (
        <div className="post">
            {isFetching ? <CircularProgress /> :
                <>
                    <div className="post-head">
                        {author ? <Link to={`/user/${author.username}`}>@{author.username}</Link> : <>User deleted</>}
                        <p>Date: {new Date(postData.createdAt).toDateString()}</p>
                        <p>Difficulty: {postData.difficulty}</p>
                    </div>
                    <h3 className='post-title'>
                        {postData.title}
                    </h3>
                    {
                        postData.tools.length > 0 &&
                        <div className="post-tools">
                            {postData.tools.map(tool => <p key={tool}>{tool}</p>)}
                        </div>
                    }
                    <div className="post-contents">
                        {postData.images.length > 0 && <PostCarousel postImages={images}/> }

                        <div className="message-rating">
                        <p className="post-message">{postData.message}</p>
                        <div className="post-rating">
                            <button onClick={() => handleUpVote()}><ThumbUp className={state.user?.id&&postData.upvotes.includes(state.user?.id)?"blue-thumb":""} /> {postData.upvotes.length > 0 && <span className='post-votes'>{postData.upvotes.length}</span>}</button>
                            <button onClick={() => handleDownVote()}><ThumbDown className={state.user?.id&&postData.downvotes.includes(state.user?.id)?"blue-thumb":""}/> {postData.downvotes.length > 0 && <span className='post-votes'>{postData.downvotes.length}</span>}</button>
                        </div>
                        </div>
                    </div>
                    <div className="post-buttons">
                        {minimize || <Link className='button' to={`/comments/${postData.id}`}>Comments{postData.comments.length > 0 ? ` (${postData.comments.length})`: ""}</Link>}
                        {((state.user && author) && (state.user.id === author.id)) &&
                            <>
                            {/* <input type="button" disabled={isFetching} value="Update" /> */}
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