import React, { Component } from 'react'
import { getExchangeRates } from '../utils/ApiClient'
import CurrencyPicker from './CurrencyPicker'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

class ServiceList extends Component {
	state = {
		exchangeRates: {},
		selectedCurrency: 'USD',
		isLoaded: false,
		error: null
	}

	componentDidMount() {
		const data = getExchangeRates()
			.then(res => {
				this.setState({
					exchangeRates: res,
					isLoaded: true
				})
			})
			.catch(err => {
				this.setState({
					error: err,
					isLoaded: true
				})
			})
	}

	render() {
		const { exchangeRates, selectedCurrency, isLoaded, error } = this.state
		if (isLoaded) {
			if (error) {
				return <div>FEL</div>
			} else {
				return (
					<div>
						{/* <div>{JSON.stringify(exchangeRates, null, 3)}</div> */}

						<div>VALD: {exchangeRates.rates[selectedCurrency]}</div>
						<CurrencyPicker availableRates={exchangeRates} />
					</div>
				)
			}
		} else if (!isLoaded) {
			return <div>Loading</div>
		}
	}
}

export default ServiceList
