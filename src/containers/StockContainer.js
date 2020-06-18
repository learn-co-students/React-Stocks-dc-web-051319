import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

   filterStock = () => {
      if (this.props.filter !== 'none') {
         return this.props.stocks.filter(stock => stock.type === this.props.filter)
      } else {
         return this.props.stocks
      }
   }

   render() {
      return (
         <div>
         <h2>Stocks</h2>
         {
         this.filterStock().map(stockObj => {
            return <Stock
               key={stockObj.id}
               stock={stockObj}
               handleClick={this.props.handleClick}/>
            })
         }
         </div>
      );
   }
}

export default StockContainer;

