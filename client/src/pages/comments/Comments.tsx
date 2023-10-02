import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../../types/Post';
import { getPostById } from '../../api/postApi';
import { CommentCard } from '../../components/CommentCard/CommentCard';
import NewComment from '../../components/NewComment/NewComment';
import PostCard from '../../components/PostList/PostCard/PostCard';
import { AppContext } from '../../lib/ContextProvider';
import './Comments.css';

export const Comments = () => {
    const { state } = useContext(AppContext);
    const { postId } = useParams();
    
    const [post, setPost] = useState({} as Post);
    const [displayedComments, setDisplayedComments] = useState(new Array<string>());
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        // Fetch post data on page load
        (async () => {
            if (!postId) throw Error("Error loading comments. Post ID is undefined.");
            const foundPost = await getPostById(postId);
            setPost(foundPost);
            setIsFetching(false);
        })();
    }, []);

    useEffect(() => {
        // If there are no comments, try to load the first few
        if (post.comments) {
            displayMoreComments(10);
        }
    }, [post]);    

    const displayMoreComments = (numToDisplay: number) => {
        const tempDisplayedComments = [...displayedComments];
        // Push more comments into the displayedComments array
        // Start counting from the number of comments already in the array
        for (let i = displayedComments.length; i < numToDisplay; i++) {
            // Stop trying to push more comments if there are no more in the Post's data
            if (i === post.comments.length) break;
            
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
                        <div id="commentListEnd">
                            {isFetching ? <CircularProgress /> : <button onClick={() => displayMoreComments(5)}>Load more comments</button>}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
