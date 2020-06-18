import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  generateStocks = () => {
    return this.props.portfolioStocks.map(stock => {
      return <Stock stock={stock} key={stock.id} buyOrSellStock={this.props.buyOrSellStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.generateStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
