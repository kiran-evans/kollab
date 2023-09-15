import  './Post.css'

function Post() {
  return (
    <div className="post">
        <div className="post-head">
            <p>@username</p>
            <p>Date:14/09/2023</p>
            <p>Difficulty: Intermediate</p>
            <p>Duration: 12 Days </p>
        </div>
        <h3 className='post-title'>
            Title
        </h3>
        <div className="post-tools">
            <p>JavaScript</p>
            <p>React</p>
            <p>Python</p>
            <p>SQL</p>
        </div>
        <div className="post-contents">
            <div className="image">
                <img src="" alt="" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat dignissimos nisi tenetur? Sapiente, optio consequuntur eos dolorum quae ad. Accusantium adipisci quo, perspiciatis alias mollitia iure consectetur distinctio recusandae!</p>
            <div className="post-rating">
                <p>Rating: 0</p>
                <p>UP</p>
                <p>DOWN</p>
            </div>
        </div>
        <div className="post-buttons">
            <input type="button" value="comment" />
            <input type="button" value="Update" />
            <input type="button" value="Delete" />
            <input type="button" value="Save" />
        </div>
    </div>
  )
}

export default Post