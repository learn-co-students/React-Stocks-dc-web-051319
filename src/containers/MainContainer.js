import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    stocksCopy: [],
    portfolioStocks: [],
    toggle: true
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({
      stocks: data, 
      stocksCopy: data
    })
    )
  }

  getStocks = (props) => {
   let filtered = this.state.stocks.filter(stock => {return stock.name === props.compName})
   let newArr = [...this.state.portfolioStocks, ...filtered]
   this.setState({
     portfolioStocks: newArr
   })
    
  }

  removeStocks = (props) => {
    let filtered = this.state.portfolioStocks.filter(stock => {return stock.name !== props.compName})
    this.setState({
      portfolioStocks: filtered
    })
    
  }


  handleCheck = (event) => {
   let stockPile = [...this.state.stocksCopy]
    
   switch(event.target.value) {
    case "All":
      this.setState({
        stocks: stockPile,
        toggle: null
      })
      break;
    case "Alphabetically":
      let alphabetical = stockPile.sort((a,b) => {
        if(b.name > a.name) return -1;
        else if (b.name < a.name) return 1;
        return 0})
      this.setState({
        stocks: alphabetical,
        toggle: true 
    })
            break;
    case "Price":
        
      let priced = stockPile.sort((a,b) => {
        return a.price - b.price})
      this.setState({
        stocks: priced,
        toggle: false
        })
        break;
    case event.target.value:
      let sporty = stockPile.filter(stock => {return stock.type === event.target.value})
      this.setState({
        stocks: sporty,
       
      })
    } 
  }

  

  render() {
    return (
      <div>
        <SearchBar toggle={this.toggle} handleCheck={this.handleCheck}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} getStocks={this.getStocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} getStocks={this.removeStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
