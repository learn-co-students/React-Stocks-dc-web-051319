import React from 'react';

const SearchBar = (props) => {
   return (
      <div>
         <strong>Sort by:</strong>
            <label>
            <input type="radio" value="Alphabetically" checked={null} onChange={(e)=> props.sortBy(e)}/>
               Alphabetically
            </label>
            <label>
               <input type="radio" value="Price" checked={null} onChange={(e) => props.sortBy(e)}/>
               Price
            </label>
            <br/>

            <label>
         <strong>Filter:</strong>
            <select onChange={(event) => props.selectChange(event)}>
               <option value="none">None</option>
               <option value="Tech">Tech</option>
               <option value="Sportswear">Sportswear</option>
               <option value="Finance">Finance</option>
            </select>
         </label>
      </div>
   )
}

export default SearchBar;
