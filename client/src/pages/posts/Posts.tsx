import Post from '../../components/Post/Post'
import ViewOptions from '../../components/ViewOptions/ViewOptions'
import './Posts.css'

function Posts() {
  return (
    <>
      <ViewOptions />
      <div className="posts">
        <Post />
        <Post />
      </div>
    </>
  )
}

export default Posts