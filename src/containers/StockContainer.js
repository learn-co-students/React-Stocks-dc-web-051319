import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  filterStock = () => {
    let filterStock;

    if(this.props.filterBy === "None") {
      filterStock = this.props.allStocks
    }
    else if (this.props.filterBy === "Finance") {
      filterStock = this.props.allStocks.filter(stock => {
        return stock.type === "Finance"
      })
    }
    else if (this.props.filterBy === "Sportswear") {
      filterStock = this.props.allStocks.filter(stock => {
        return stock.type === "Sportswear"
      })
    }
    else if (this.props.filterBy === "Tech") {
      filterStock = this.props.allStocks.filter(stock => {
        return stock.type === "Tech"
      })
    }

    return filterStock
  }

  render() {

    return (
      <div>
        <h2>Stocks</h2>
        {
          this.filterStock().map(stock => {
            return <Stock key={stock.id} stock={stock} handleClick={this.props.handleClick} />
          })
        }
      </div>
    );
  }

}

export default StockContainer;
