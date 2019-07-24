import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

   filterStocks = () => {
      if (this.props.filterBy !== 'none') {
         return this.props.allStocks.filter(stock => stock.type === this.props.filterBy)
      } else {
         return this.props.allStocks
      }
   }

   render() {
      return (
         <div>
         <h2>Stocks</h2>
            {
               this.filterStocks().map(stockObj => {
                  return <Stock
                     key={stockObj.id}
                     stockObj={stockObj}
                     handleClick={this.props.handleClick}/>
               })
            }
         </div>
      );
   }
}

export default StockContainer;
