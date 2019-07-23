import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      allStocks: [], 
      portfolioStocks: [],
      sortType: {
        alphabetical: false,
        price: false
      },
      filter: '',
      filteredStocks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => this.setState({
      allStocks: stocks
    }))
  }

  buyStock = (stock) => {
    let stocks;
    if (this.state.filter) {
      stocks = this.state.filteredStocks
    } else {
      stocks = this.state.allStocks
    }
    let filteredStocks = stocks.filter(OldStock => {
      return OldStock.id !== stock.id
    })
    if (this.state.filter) {
      this.setState({
        filteredStocks: filteredStocks,
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    } else {
      this.setState({
        allStocks: filteredStocks,
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  sellStock = (stock) => {
    let filteredStocks = this.state.portfolioStocks.filter(OldStock => {
      return OldStock.id !== stock.id
    })
    if (this.state.filter) {
      this.setState({
        filteredStocks: [...this.state.filteredStocks, stock],
        portfolioStocks: filteredStocks
      })
    } else {
      this.setState({
        allStocks: [...this.state.allStocks, stock],
        portfolioStocks: filteredStocks
      })
    }
  }

  setSort = (e) => {
    if (e.target.value === 'Alphabetically') {
      this.setState({
        sortType: {...this.state.sortType, alphabetical: true}
      }, () => this.sortStocks())
    } else {
      this.setState({
        sortType: {...this.state.sortType, price: true}
      }, () => this.sortStocks())
    }
  }

  sortStocks = () => {
    if (this.state.sortType.alphabetical) {
      let sortedStocks = this.state.allStocks.sort(function(a, b) { return a.name.localeCompare(b.name) })
      this.setState({
        allStocks: sortedStocks
      })
    } else if (this.state.sortType.price) {
      let sortedStocks = this.state.allStocks.sort(function(a, b) { return a.price - b.price })
      this.setState({
        allStocks: sortedStocks
      })
    }
  }

  setFilter = (e) => {
    let filter = e.target.value
    this.setState({
      filter: filter
    }, () => this.filterStocks())
  }

  filterStocks = () => {
    this.setState({
      filteredStocks: [...this.state.allStocks.filter(stock => stock.type === this.state.filter)]
    })
    //Now I need my Stocks Container to render the filtered stocks, rather than all of the stocks
  }


  render() {
    return (
      <div>
        <SearchBar setSort={this.setSort} setFilter={this.setFilter} sortType={this.state.sortType} />

          <div className="row">
            <div className="col-8">
              <StockContainer allStocks={this.state.filter ? this.state.filteredStocks : this.state.allStocks} buyOrSellStock={this.buyStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer buyOrSellStock={this.sellStock} portfolioStocks={this.state.portfolioStocks} />
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
