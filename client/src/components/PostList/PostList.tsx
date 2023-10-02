import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { Post } from '../../../types/Post'
import { getAllPosts } from '../../api/postApi'
import PostCard from './PostCard/PostCard'
import './Posts.css'

export const PostList = () => {
    const [postList, setPostList] = useState(new Array<Post>());
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(() => {
        // Load the posts on page load
        (async () => {
            await loadMorePosts(10);
        })();
    }, []);

    const loadMorePosts = async (numPostsToLoad: number) => {
        setIsFetching(true);
        setPostList([...postList, ...await getAllPosts(numPostsToLoad, postList.length - 1)]);
        setIsFetching(false);
    }

    return (
        <div className="postList">
            {postList.length ?
                postList.map(post => (
                    <PostCard key={post.id} data={post} />
                ))
                :
                <p>No posts</p>
            }
            {isFetching ? <CircularProgress /> : <button onClick={() => loadMorePosts(10)}>Load more posts</button>}
        </div>
    )
}