import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { Post } from '../../../types/Post'
import { getAllPosts } from '../../api/postApi'
import PostCard from './PostCard/PostCard'
import './PostList.css'

export const PostList = (props: { author_id?: string }) => {
    const { author_id } = props;
    const [postList, setPostList] = useState(new Array<Post>());
    const [isFetching, setIsFetching] = useState(true);
    const [hasReachedEnd, setHasReachedEnd] = useState(false);
    
    useEffect(() => {
        // Load the posts on page load
        (async () => {
            await loadMorePosts(10);
        })();
    }, []);

    const loadMorePosts = async (numPostsToLoad: number) => {
        setIsFetching(true);
        const foundPosts = await getAllPosts(numPostsToLoad, postList.length, author_id);
        if (foundPosts.length > 0) {
            setPostList([...postList, ...foundPosts]);
        } else {
            setHasReachedEnd(true);
        }
        setIsFetching(false);
    }

    return (
        <div className="post-list">
            {postList.length ?
                postList.map(post => (
                    <PostCard key={post.id} data={post} />
                ))
                :
                !isFetching && <p>No posts</p>
            }
            {isFetching ? <CircularProgress /> : (hasReachedEnd ? <p>Looks like you've reached the end!</p> : <button className='endListButton' onClick={() => loadMorePosts(10)}>Load more posts</button>)}
        </div>
    )
}