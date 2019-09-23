import React from 'react';

const SearchBar = ({ handleSort, handleFilter }) => {
  return (
    <div>
      <strong>Sort by: </strong>&nbsp;
      <label>
        <input
          type="radio"
          name="sort"
          value="alphabetically"
          checked={null}
          onChange={(e) => handleSort(e.target.value)} /> Alphabetically
      </label>&nbsp;
      <label>
        <input
          type="radio"
          name="sort"
          value="price"
          checked={null}
          onChange={(e) => handleSort(e.target.value)} /> Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>&nbsp;
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
