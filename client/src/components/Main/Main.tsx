import Post from '../Post/Post'
import ViewOptions from '../ViewOptions/ViewOptions'
import './Main.css'

function Main() {
  return (
    <main>
      <ViewOptions />
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  )
}

export default Main