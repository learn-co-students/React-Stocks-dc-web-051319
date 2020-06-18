import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolio: [],
    sortBy: '',
    filterBy: 'None'
  }

  componentDidMount() {
    fetch("http://localhost:4000/stocks")
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        allStocks: stocks
      })
    })

  }

  addStock = (stockObj) => {

    // let copyStocks = [...this.state.allStocks]

    // let foundStock = copyStocks.find(stock => stock.id === stockObj.id)
    // let index = copyStocks.indexOf(foundStock)

    // copyStocks.splice(index, 1)

    this.setState({
      portfolio: [...this.state.portfolio, stockObj]
    })
   
  }

  removeStock = (stockObj) => {
    let copyPortfolio = [...this.state.portfolio]

    let foundStock = copyPortfolio.find(stock => stock.id === stockObj.id)

    if (foundStock) {
      let index = copyPortfolio.indexOf(foundStock)
      copyPortfolio.splice(index, 1)

      this.setState({
        portfolio: copyPortfolio
      })
    }
  
  }

  sortBy = (event) => {
    
    if (event.target.value === "Alphabetically") {
      this.setState({
        sortBy: 'Alphabetically'
      })
    }
    else if (event.target.value === "Price") {
      this.setState({
        sortBy: 'Price'
      })
    }
    else if (event.target.value === "All") {
      this.setState({
        sortBy: 'All'
      })
    }
  }

  filterStock = (event) => {
    this.setState({
      filterBy: event.target.value
    })
    
  }

  render() {

    let sortedStocks;

    if(this.state.sortBy) {
      if(this.state.sortBy === 'Alphabetically') {
        let copyStocks = [...this.state.allStocks]
        sortedStocks = copyStocks.sort((a, b) => a.name.localeCompare(b.name))
      }
      else if(this.state.sortBy === 'Price') {
        let copyStocks = [...this.state.allStocks]
        sortedStocks = copyStocks.sort((a,b) => a.price - b.price)
      } 
      else if(this.state.sortBy === 'All') {
        sortedStocks = this.state.allStocks
      } 
    } else {
      sortedStocks = this.state.allStocks
    }




    return (
      <div>
        <SearchBar sortBy={this.sortBy} filterStock={this.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer 
                allStocks={sortedStocks}
                handleClick={this.addStock}
                filterBy={this.state.filterBy}
              />

            </div>
            <div className="col-4">
              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.removeStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
