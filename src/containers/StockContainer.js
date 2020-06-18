import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  generateStocks = () => {
    return this.props.allStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} buyOrSellStock={this.props.buyOrSellStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { this.generateStocks() }
      </div>
    );
  }

}

export default StockContainer;
