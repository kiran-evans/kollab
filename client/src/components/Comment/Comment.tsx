import { Link } from 'react-router-dom'
import './Comment.css'
export default function Comment() {
  return (
    <div className='comment'>
        <Link className='comment-author' to='/posts/username'>@username</Link>
        <p className='comment-message'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ullam tempora aut sint dicta aliquam alias iste expedita. Rerum aut in ea doloribus dolor officiis explicabo soluta quam recusandae quos!</p>
    </div>
  )
}
