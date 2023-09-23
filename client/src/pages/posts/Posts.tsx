import { useContext, useEffect } from 'react'
import Post from '../../components/Post/Post'
import ViewOptions from '../../components/ViewOptions/ViewOptions'
import './Posts.css'
import { getAllPosts } from '../../api/postApi'
import { AppContext } from '../../lib/ContextProvider'
import { selectPosts } from '../../lib/ContextActions'

function Posts() {
  const { state, dispatch } = useContext(AppContext);
  const posts = selectPosts(state);
  
  useEffect(() => {
    const loadPosts = async () => {
      dispatch({
        type: 'LOAD_POSTS',
        payload: [...await getAllPosts()]
      })
    }
    loadPosts()
  }, [])
  return (
    <>
      <ViewOptions />
      <div className="posts">
        {
          posts.length > 0 ? 
            posts.map(iter => <Post key={iter.id} data={iter}  />): 
            <h2>No Posts</h2>
        }
      </div>
    </>
  )
}

export default Posts