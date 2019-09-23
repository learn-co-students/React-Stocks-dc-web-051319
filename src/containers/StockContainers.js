import React, { Fragment } from 'react';

export const StockContainer = ({ stocks, buyStock }) => (
  <div>
    <h2>Stocks</h2>
    {stocks.map(stock => (
      <Stock key={stock.id} stock={stock} action={buyStock} />
    ))}
  </div>
)

export const PortfolioContainer = ({ portfolio, sellStock }) => (
  <div>
    <h2>My Portfolio</h2>
    {portfolio.map(stock => (
      <Stock key={stock.id} stock={stock} action={sellStock} />
    ))}
  </div>
)

export const Stock = ({ stock, action }) => (
  <Fragment>
    <div className='card' onClick={() => action(stock)}>
      <div className='card-body'>
        <h5 className='card-title'>
          {stock.name}
        </h5>
        <p className='card-text'>
          {stock.price}
        </p>
      </div>
    </div>
  </Fragment>
)

