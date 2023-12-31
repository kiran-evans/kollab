import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById } from '../../api/postApi';
import { CommentCard } from '../../components/CommentCard/CommentCard';
import NewComment from '../../components/NewComment/NewComment';
import PostCard from '../../components/PostList/PostCard/PostCard';
import { AppContext } from '../../lib/ContextProvider';
import { Post } from '../../types/Post';
import './Comments.css';

export const Comments = () => {
    const { state } = useContext(AppContext);
    const { postId } = useParams();
    
    const [post, setPost] = useState({} as Post);
    const [displayedComments, setDisplayedComments] = useState(new Array<string>());
    const [isFetching, setIsFetching] = useState(true);
    const [hasReachedEnd, setHasReachedEnd] = useState(false);
    const navigator = useNavigate();

    useEffect(() => {
        // Fetch post data on page load
        (async () => {
            if (!postId) throw Error("Error loading comments. Post ID is undefined.");
            try {
                const foundPost = await getPostById(postId);
                setPost(foundPost);
            } catch (err) {
                console.error(err);
                navigator("/not-found");
            }
            setIsFetching(false);
        })();
    }, []);

    useEffect(() => {
        // If there are no comments, try to load the first few
        if (displayedComments.length === 0 && post.comments) {
            displayMoreComments(5);
        }
    }, [post]);    

    const displayMoreComments = (numToDisplay: number) => {        
        const tempDisplayedComments = [...displayedComments];
        // Push more comments into the displayedComments array
        // Start counting from the number of comments already in the array
        for (let i = displayedComments.length; i < displayedComments.length + numToDisplay; i++) {            
            // Stop trying to push more comments if there are no more in the Post's data
            if (i >= post.comments.length) {
                setHasReachedEnd(true);
                break;
            }
            
            tempDisplayedComments.push(post.comments[i]);
        }
        setDisplayedComments(tempDisplayedComments);
    }
    
    return (
        <div className="comments">
            {isFetching ?
                <p><CircularProgress size={15} />&nbsp;Loading...</p>
                :
                <>
                    <PostCard data={post} minimize={true} />
                    {state.user && <NewComment post={post} setPost={setPost} />}
                    <div className="comment-list">
                        {displayedComments.length ? 
                            displayedComments.map(commentId => (
                                <CommentCard key={commentId} id={commentId} />
                            ))
                            :
                            <h2>No comments</h2>
                        }
                        <div id="comment-list-end">
                            {isFetching ? <CircularProgress /> : (hasReachedEnd ? <p>Looks like you've reached the end!</p> : <button onClick={() => displayMoreComments(5)}>Load more comments</button>)}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
