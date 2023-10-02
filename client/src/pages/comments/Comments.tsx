import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../../types/Post';
import { getPostById } from '../../api/postApi';
import CommentCard from '../../components/CommentCard/CommentCard';
import NewComment from '../../components/NewComment/NewComment';
import PostCard from '../../components/PostList/PostCard/PostCard';
import { AppContext } from '../../lib/ContextProvider';
import './Comments.css';

export const Comments = () => {
    const { state } = useContext(AppContext);
    const { postId } = useParams();
    
    const [post, setPost] = useState({} as Post);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        // Fetch post data on page load
        (async () => {
            if (!postId) throw Error("Error loading comments. Post ID is undefined.");
            setPost(await getPostById(postId));
            setIsFetching(false);
        })();
    }, []);
    
    return (
        <div className="comments">
            {isFetching ?
                <p><CircularProgress size={15} />&nbsp;Loading...</p>
                :
                <>
                <PostCard data={post} minimize={true} />
                {state.user?.id && <NewComment postId={postId} />}
                <div className="comment-list">
                    {
                    post.comments.length > 0 ? 
                        post?.comments.map(commendObject => <CommentCard key={commendObject.id} commentData={commendObject} />) :
                        <h2>No comments</h2>
                    }
                </div>
                </>
            }
        </div>
    )
}
