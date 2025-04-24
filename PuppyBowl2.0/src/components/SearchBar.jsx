export default function SearchBar({ SearchBar, setSearchBar }) {
  return (
    <div className="searchBar"> 
    <input
      type="text"
      placeholder="FIND A DOG!"
      value={SearchBar}
      onChange={(e) => setSearchBar(e.target.value)}
      className="searchBar"
    />
    </div>
  );
}
