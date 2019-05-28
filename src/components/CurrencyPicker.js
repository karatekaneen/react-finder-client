import React, { Component } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'

class CurrencyPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isShow: true
		}
	}

	render() {
		const availableRates = Object.keys(this.props.availableRates.rates)
		return (
			<div>
				{JSON.stringify(availableRates, null, 3)}
				<Form>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>Example select</Form.Label>
						<Form.Control as="select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
				</Form>
			</div>
		)
	}
}
export default CurrencyPicker
