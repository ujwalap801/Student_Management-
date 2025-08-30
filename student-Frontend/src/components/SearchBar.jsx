function SearchBar({ search, setSearch, onSearch, handleReset }) {
  return (
    <div className="d-flex mb-3">
  <input
    type="text"
    className="form-control me-2"
    placeholder="Search by Name or Roll No"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button className="btn btn-primary me-2" onClick={onSearch}>
    Search
  </button>
  <button className="btn btn-secondary" onClick={handleReset}>
    Back
  </button>
</div>

  );
}

export default SearchBar;
