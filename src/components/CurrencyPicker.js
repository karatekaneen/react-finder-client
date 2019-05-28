import React, { Component } from 'react'
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css'

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
			<div className="col-sm-6 offset-sm-3">
				<Select
					styles={customStyles}
					autoFocus
					className="currency-selector"
					options={availableRates}
					onChange={this.emitChange}
				/>
			</div>
		)
	}
}
export default CurrencyPicker
