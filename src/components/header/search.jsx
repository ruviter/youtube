import React, { useState } from "react";

const Search = ({ handleSearchKeyword }) => {
  return (
    <div>
      <span>youtube</span>
      <form action="submit" onSubmit={handleSearchKeyword}>
        <input type="text" />
        <button>search</button>
      </form>
    </div>
  );
};

export default Search;
