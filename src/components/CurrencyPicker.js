import React, { Component } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * Komponent för att välja valuta som priser skall visas i.
 */
class CurrencyPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isSelected: ''
		}
		this.emitChange = event => {
			this.props.changeCurrency(event.value)
		}
	}

	render() {
		const customStyles = {
			option: (provided, state) => ({
				...provided,
				color: state.isSelected ? '#dddddd' : 'Black'
			})
		}
		const availableRates = Object.keys(this.props.availableRates.rates).map(
			item => {
				return { label: item, value: item }
			}
		)
		return (
			<Select
				styles={customStyles}
				autoFocus
				placeholder="Byt valuta"
				className="currency-selector"
				options={availableRates}
				onChange={this.emitChange}
			/>
		)
	}
}
export default CurrencyPicker
