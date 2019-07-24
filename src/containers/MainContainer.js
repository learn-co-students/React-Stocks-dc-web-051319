import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
   constructor() {
      super()
      this.state = {
         stocks: [],
         portfolios: [],
         sort: 'none',
         filter: 'none'
      }
   }

   componentDidMount() {
      fetch('http://localhost:3000/stocks')
         .then(response => response.json())
         .then(data => this.setState({ stocks: data })
      )
   }

   buyStock = (stockObj) => {
      this.state.portfolios.find(stock => stock.id === stockObj.id) ?
         alert('Stock already added') :
      this.setState({ 
         portfolios: [...this.state.portfolios, stockObj]
      });
   }

   sellStock = (stockObj) => {
      let copy = [...this.state.portfolios]
      let update = copy.filter(stock => stock.id !== stockObj.id)
      this.setState({ portfolios: update });
   }

   sortBy = (e) => {this.setState({ sort: e.target.value })}

   sortStock = () => {
      if (this.state.sort === 'Alphabetically') {
         return this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
      } else if (this.state.sort === 'Price') {
         return this.state.stocks.sort((a, b) => b.price - a.price)
      } else {
         return this.state.stocks
      }
   }

   selectChange = (e) => this.setState({ filter: e.target.value }); 
      
   render() {
      return (
         <div>
            <SearchBar
               sortBy={this.sortBy}
               selectChange={this.selectChange}/>

            <div className="row">
               <div className="col-6">
                  <StockContainer
                     stocks={this.sortStock()}
                     handleClick={this.buyStock}
                     filter={this.state.filter}/>
               </div>

               <div className="col-6">
                  <PortfolioContainer
                     portfolios={this.state.portfolios}
                     handleClick={this.sellStock}/>
               </div>
            </div>
         </div>
      );
   }
}

export default MainContainer;
