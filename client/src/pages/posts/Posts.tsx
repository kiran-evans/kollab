import { useContext, useEffect, useState } from 'react'
import { ViewOptions } from '../../../types/ViewOptions'
import PostCard from '../../components/PostCard/PostCard'
import { ViewOptionsMenu } from '../../components/ViewOptionsMenu/ViewOptionsMenu'
import { selectPosts, selectTools } from '../../lib/ContextActions'
import { AppContext } from '../../lib/ContextProvider'
import './Posts.css'
import { useParams } from 'react-router-dom'
import { getAllPosts } from '../../api/postApi'

function Posts() {
  const { author=null } = useParams();

  const { state, dispatch } = useContext(AppContext);
  const tools = selectTools(state);
  
  const [viewOptions, setViewOptions] = useState<ViewOptions>({
    sort: "date",
    difficulty: "",
    tools: tools, // Array of all tools used by projects
  });
  
  const posts = selectPosts(state, viewOptions, author); // all post
  const fetchPosts = async () => {
    // Maybe moved and used after server response
    dispatch({
      type: "LOAD_POSTS",
      payload: await getAllPosts()
    })
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <ViewOptionsMenu viewOptions={viewOptions} setViewOptions={setViewOptions} />
      <div className="posts">
        {
          posts.length > 0 ? 
            posts.map(iter => <PostCard key={iter.id} data={iter} />): 
            <h2>No Posts {author && `by ${author}`}</h2>
        }
      </div>
    </>
  )
}

export default Posts