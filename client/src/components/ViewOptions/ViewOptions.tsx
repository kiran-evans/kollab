import './ViewOptions.css'

function ViewOptions() {
  return (
    <div className="view-options">
        <label htmlFor="sort">
          Sort:
          <select name="sort" id="sort-options">
            <option value="date">Date</option>
            <option value="score">Score</option>
            <option value="username">Username</option>
            <option value="duration">Duration</option>
          </select>
        </label>
        <label htmlFor="difficulty">
          Difficulty:
          <select name="difficult" id="difficulty-options">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <div className="tools-filter">
          <p>Tools</p>
          <label htmlFor="nodejs">
            NodeJs:
            <input type="checkbox" name="nodejs" id="nodejs" />
          </label>
          <label htmlFor="React">
            React:
            <input type="checkbox" name="reactjs" id="reactjs" />
          </label>
          <label htmlFor="javascript">
            JavaScript:
            <input type="checkbox" name="javascript" id="javascript" />
          </label>
        </div>
        <label htmlFor="only-saved">
          Show only saved:
          <input type="checkbox" name="only-saved" id="only-saved" />
        </label>
        <input type="button" value="Reset" />
      </div>
  )
}

export default ViewOptions