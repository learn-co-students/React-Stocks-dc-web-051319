import React from 'react'

const Stock = (props) => (
   <div>
      <div className="card" onClick={() => props.handleClick(props.stockObj)}>
         <div className="card-body">
               <h5 className="card-title">
                  {props.stockObj.name}
               </h5>
               <p className="card-text">
                  {props.stockObj.price}
               </p>
         </div>
      </div>
   </div>
);

export default Stock
