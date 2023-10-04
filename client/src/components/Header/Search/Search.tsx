import './Search.css'

export const SearchBox = () => {
    return (
        <div className="searchBox rounded">
            <input id="searchBoxInput" type="text" name='search' placeholder='search' />
        </div>
    )
}