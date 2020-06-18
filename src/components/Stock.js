import React, { Fragment } from 'react'

const Stock = ({ stock, action }) => (
	<Fragment>
		<div className='card' onClick={() => action(stock)}>
			<div className='card-body'>
				<h5 className='card-title'>
					{stock.name}
				</h5>
				<p className='card-text'>
					{stock.price}
				</p>
			</div>
		</div>
	</Fragment>
)

export default Stock