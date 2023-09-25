import { useContext, useState } from 'react'
import Post from '../../components/Post/Post'
import ViewOptions from '../../components/ViewOptions/ViewOptions'
import './Posts.css'
import { AppContext } from '../../lib/ContextProvider'
import { selectPosts, selectTools } from '../../lib/ContextActions'

function Posts() {
  const { state } = useContext(AppContext);
  const tools = selectTools(state);
  
  const [viewOptions, setViewOptions] = useState({
    sort: "date",
    difficulty: "",
    tools: tools, // Array of all tools used by projects
  });
  
  const posts = selectPosts(state, viewOptions); // all post
  
  return (
    <>
      <ViewOptions viewOptions={viewOptions} setViewOptions={setViewOptions} />
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