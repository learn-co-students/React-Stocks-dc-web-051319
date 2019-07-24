import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

   render() {
      return (
         <div>
         <h2>My Portfolio</h2>
            {
               this.props.myPortfolios.map(stock => {
                  return <Stock
                     key={stock.id}
                     stockObj={stock}
                     handleClick={this.props.handleClick}/>
               })
            }
         </div>
      );
   }

}

export default PortfolioContainer;
