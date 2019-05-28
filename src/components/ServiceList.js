import React, { Component } from 'react'
import { loadData } from '../utils/ApiClient'
import CurrencyPicker from './CurrencyPicker'
import ServiceCardContainer from './ServiceCardContainer'

class ServiceList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			exchangeRates: {},
			selectedCurrency: 'USD',
			isLoaded: false,
			error: null,
			services: []
		}

		this.changeCurrency = this.changeCurrency.bind(this)
	}
	// state = {
	// }

	changeCurrency(newCurrency) {
		this.setState({
			selectedCurrency: newCurrency
		})
	}

	componentDidMount() {
		const data = loadData()
			.then(res => {
				this.setState({
					exchangeRates: res.exchangeRates,
					services: res.services,
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
		const {
			exchangeRates,
			selectedCurrency,
			isLoaded,
			error,
			services
		} = this.state
		const changeCurrency = this.changeCurrency
		changeCurrency.bind(this)
		if (isLoaded) {
			if (error) {
				return <div>FEL</div>
			} else {
				return (
					<div className="container-fluid">
						<div className="row">
							{/* <div>{JSON.stringify(exchangeRates, null, 3)}</div> */}

							<div className="col-sm-12">
								VALD: {selectedCurrency} -{' '}
								{exchangeRates.rates[selectedCurrency]}
							</div>
							<CurrencyPicker
								changeCurrency={changeCurrency}
								availableRates={exchangeRates}
							/>
						</div>
						<div>
							<ServiceCardContainer
								services={services}
								currency={{
									factor: exchangeRates.rates[selectedCurrency],
									label: selectedCurrency
								}}
							/>
						</div>
					</div>
				)
			}
		} else if (!isLoaded) {
			return <div>Loading</div>
		}
	}
}

export default ServiceList
