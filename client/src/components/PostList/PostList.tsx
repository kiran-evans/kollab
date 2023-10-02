import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { Post } from '../../../types/Post'
import PostCard from './PostCard/PostCard'
import './Posts.css'

export const PostList = () => {
    const [postList, setPostList] = useState(new Array<Post>());
    const [isFetching, setIsFetching] = useState(false);
    
    useEffect(() => {
        // Load the posts on page load
    }, []);

    return (
        <div className="postList">
            {isFetching && <p><CircularProgress size={15} />&nbsp;Loading...</p>}
            {postList.length ?
                postList.map(post => (
                    <PostCard key={post.id} data={post} />
                ))
                :
                <p>No posts</p>
            }
        </div>
    )
}