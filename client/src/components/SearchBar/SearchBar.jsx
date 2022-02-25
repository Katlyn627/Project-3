const Search = () => {
    return <div>Search for Hikes</div>
}

export default Search;

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for Hikes</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for Hikes"
            name="s"
        />
        <button type="submit">Search</button>    
    </form>
);

export default SearchBar;