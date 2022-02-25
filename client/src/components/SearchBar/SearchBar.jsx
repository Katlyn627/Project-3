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

const Hikes = [
    { id: '1', name: 'Colorado Hike 1' },
    { id: '2', name: 'Colorado Hike 2' },
    { id: '3', name: 'Colorado Hike 3' },
    { id: '4', name: 'Colorado Hike 4' },
];