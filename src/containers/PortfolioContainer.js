import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

   render() {
      return (
         <div>
         <h2>My Portfolio</h2>
            {
               this.props.portfolios.map(stockObj => {
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

export default PortfolioContainer;
