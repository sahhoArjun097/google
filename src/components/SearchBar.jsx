import React from "react";
import "./../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search by: Job title, Position, Keyword..." />
      <input type="text" placeholder="City, state or country" />
      <button className="find-job-btn">Find Job</button>
    </div>
  );
}

export default SearchBar;
