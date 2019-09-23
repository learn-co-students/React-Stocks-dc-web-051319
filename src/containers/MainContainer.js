import React, { Component } from 'react'
import { StockContainer, PortfolioContainer } from './StockContainers'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
	state = {
		allStocks: [],
		stocks: [],
		portfolio: [],
		sortBy: ''
	}

	componentDidMount() {
		fetch('http://localhost:3000/stocks')
			.then(res => res.json())
			.then(allStocks => this.setState({ allStocks, stocks: allStocks }))
	}


	buyStock = (stock) => {
		!this.state.portfolio.includes(stock) &&
			this.setState({
				portfolio: [...this.state.portfolio, stock]
			})
	}

	sellStock = (stock) => {
		this.state.portfolio.includes(stock) &&
			this.setState({
				portfolio: [...this.state.portfolio.filter(allStocks => (
					allStocks !== stock
				))]
			})
	}

	handleSort = (sortBy) => {
		this.setState({ sortBy })
	}

	handleFilter = (type) => {
		const { allStocks } = this.state
		this.setState({
			stocks: [...allStocks.filter(stock => stock.type === type)]
		})
	}

	render() {
		const { stocks, portfolio, sortBy } = this.state

		const sortedStocks = stocks.sort((a, b) => {
			switch (sortBy) {
				case "alphabetically":
					// Sorts a to z (asc)
					return a.name > b.name ? 1 : -1
				case "price":
					// Sorts low to high (asc)
					return a.price > b.price ? 1 : -1
				default:
					return stocks
			}
		})

		return (
			<div>
				<SearchBar
					handleSort={this.handleSort}
					handleFilter={this.handleFilter}
				/>

				<div className='row'>
					<div className='col-8'>
						<StockContainer
							stocks={sortedStocks}
							buyStock={this.buyStock}
						/>
					</div>
					<div className='col-4'>
						<PortfolioContainer
							portfolio={portfolio}
							sellStock={this.sellStock}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default MainContainer
