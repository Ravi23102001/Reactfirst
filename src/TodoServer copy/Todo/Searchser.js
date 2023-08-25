import React from "react";

function Search({ search, setSearch }) {
  return (
    <form className="p-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        className="form-control"
        id="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}    //intha value ellam setSearch moolam search la irukkum
      />
    </form>
  );
}

export default Search;
