import { useContext, useEffect } from 'react'
import Post from '../../components/Post/Post'
import ViewOptions from '../../components/ViewOptions/ViewOptions'
import './Posts.css'
import { getAllPosts } from '../../api/postApi'
import { AppContext } from '../../lib/ContextProvider'
import { selectPosts, selectTools } from '../../lib/ContextActions'

function Posts() {
  const { state, dispatch } = useContext(AppContext);
  let posts = selectPosts(state);
  const tools = selectTools(state);
  
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
      <ViewOptions tools={tools} />
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