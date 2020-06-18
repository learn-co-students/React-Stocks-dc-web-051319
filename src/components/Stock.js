import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" >
      <div className="card-body" onClick={() => props.getStocks(props)}>
        <h5 className="card-title">{
            props.compName
          }</h5>
        <p className="card-text">{
            props.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
