import React, { Component } from 'react'
import { loadData } from '../utils/ApiClient'
import CurrencyPicker from './CurrencyPicker'
import SearchBar from './SearchBar'
import ServiceCardContainer from './ServiceCardContainer'

class ServiceList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			exchangeRates: {},
			selectedCurrency: 'USD',
			isLoaded: false,
			error: null,
			allServices: [],
			selectedServices: []
		}

		this.changeCurrency = this.changeCurrency.bind(this)
		this.setSelectedServices = this.setSelectedServices.bind(this)
	}

	/**
	 * Metod för att byta vald valuta.
	 * Gjord för att passa ner till child.
	 * @param {string} newCurrency
	 */
	changeCurrency(newCurrency) {
		this.setState({
			selectedCurrency: newCurrency
		})
	}

	/**
	 * Metod för att visa vilka annonser som skall visas.
	 * Skall kunna påverkas från flera olika childs i framtiden.
	 * @param {Array} services
	 */
	setSelectedServices(services) {
		this.setState({
			selectedServices: services
		})
	}

	componentDidMount() {
		loadData()
			.then(res => {
				this.setState({
					exchangeRates: res.exchangeRates,
					allServices: res.services,
					selectedServices: res.services,
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
			selectedServices,
			allServices
		} = this.state

		const changeCurrency = this.changeCurrency
		const setSelectedServices = this.setSelectedServices
		changeCurrency.bind(this)
		setSelectedServices.bind(this)

		if (isLoaded) {
			if (error) {
				return <div>FEL</div>
			} else {
				return (
					<div className="container-fluid">
						<div className="settings-wrapper row ">
							<div className="col-sm-12 col-md-8 offset-md-2">
								<SearchBar
									services={allServices}
									setSelectedServices={setSelectedServices}
								/>
							</div>
							<div className="col-sm-12 col-md-8 offset-md-2">
								<CurrencyPicker
									changeCurrency={changeCurrency}
									availableRates={exchangeRates}
								/>
							</div>
						</div>
						<div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 ">
							<ServiceCardContainer
								services={selectedServices}
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
