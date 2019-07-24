import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

   constructor() {
      super()
      this.state = {
         allStocks: [],
         myPortfolios: [],
         sortBy: 'none',
         filterBy: 'none'
      }
   }

   componentDidMount() {
      fetch('http://localhost:3000/stocks')
         .then(resp => resp.json())
         .then(data => {
            this.setState({ allStocks: data });
         });
   }

   buyStock = (stockObj) => {
      this.state.myPortfolios.find(stock => stock.id === stockObj.id) ? (
         alert('Already added')
      ) : (
      this.setState({ myPortfolios: [...this.state.myPortfolios, stockObj] })
      )
   }

   sellStock = (stockObj) => {
      let copy = [...this.state.myPortfolios]
      let updatedStock = copy.filter(stock => stock.id !== stockObj.id) 
      this.setState({ myPortfolios: updatedStock });
      
      // SPLICE METHOD
      // let found = copy.find(stock => stock.id === stockObj.id)
      // let index = copy.indexOf(found)
      // copy.splice(index, 1)
   }

   sortBy = (event) => {
         this.setState({ sortBy: event.target.value });
   }

   sortStock = () => {
      if (this.state.sortBy === 'Alphabetically') {
         return this.state.allStocks.sort((a, b ) => a.ticker.localeCompare(b.ticker))
      } else if (this.state.sortBy === 'Price') {
         return this.state.allStocks.sort((a, b) => b.price - a.price)
      } else {
         return this.state.allStocks
      }
   }

   selectChange = (event) => {
      this.setState({ filterBy: event.target.value });
   }

   render() {
      return (
         <div>
            <SearchBar sortBy={this.sortBy} selectChange={this.selectChange}/>

            <div className="row">
               <div className="col-8">

                  <StockContainer
                     allStocks={this.sortStock()}
                     handleClick={this.buyStock}
                     filterBy={this.state.filterBy}/>

               </div>
               <div className="col-4">

                  <PortfolioContainer
                     myPortfolios={this.state.myPortfolios}
                     handleClick={this.sellStock}/>

               </div>
            </div>
         </div>
      );
   }

}

export default MainContainer;
