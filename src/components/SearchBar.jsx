import React, { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import "../styles/Navbar.css";
import { SearchContext } from "../context/SearchBarProvider";

function SearchBar({}) {
  const { searchInput, setSearchInput } = useContext(SearchContext);
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="searchBar">
      <form>
        <div className="seachIcon">
          <MdSearch style={{ fontSize: 40 }} />
        </div>
        <input
          type="text"
          placeholder="Film Ara"
          value={searchInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
