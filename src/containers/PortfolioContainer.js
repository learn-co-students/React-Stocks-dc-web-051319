import React from 'react';
import Stock from '../components/Stock'

export const PortfolioContainer = ({ portfolio, sellStock }) => (
  <div>
    <h2>My Portfolio</h2>
    {portfolio.map(stock => (
      <Stock key={stock.id} stock={stock} action={sellStock} />
    ))}
  </div>
)
