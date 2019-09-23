import React from 'react'
import Stock from '../components/Stock'

export const StockContainer = ({ stocks, buyStock }) => (
	<div>
		<h2>Stocks</h2>
		{stocks.map(stock => (
			<Stock key={stock.id} stock={stock} action={buyStock} />
		))}
	</div>
)