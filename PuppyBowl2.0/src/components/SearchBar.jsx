export default function SearchBar({ searchBar, setSearchBar }) {
  return (
    <div className="searchBar"> 
    <input
      type="text"
      placeholder="FIND A DOG!"
      value={searchBar}
      onChange={(e) => setSearchBar(e.target.value)}
      className="searchBar"
    />
    </div>
  );
}
