import React from 'react';

const SearchBar = (props) => {

  let handleChange = (event) => {
    event.persist
    props.sortBy(event)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="All" checked={null} onChange={handleChange}/>
        All
      </label>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={handleChange}/>
        Price
      </label>

      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterStock(event)}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
