import { Link } from 'react-router-dom'
import './Comment.css'

export default function Comment({data}) {
  return (
    <div className='comment'>
        <Link className='comment-author' to='/posts/username'>@username</Link>
        <input type="button" value="Edit" />
        <input type="button" value="Delete" />
        <p className='comment-message'>{data.message}</p>
    </div>
  )
}
