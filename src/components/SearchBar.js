import React from 'react';
//import { prependOnceListener } from 'cluster';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <div>
      <label >
        <input type="radio" value="Alphabetically" checked={props.toggle === true} onChange={props.handleCheck}/>
        Alphabetically
      </label>
      </div>
      <div>
      <label >
        <input type="radio" value="Price"  checked={props.toggle === false} onChange={props.handleCheck}/>
        Price
      </label>
      </div>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleCheck}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
