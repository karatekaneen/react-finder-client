import React, { Component } from 'react'
import ServiceCard from './ServiceCard'

class ServiceCardContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="card-columns">
				{this.props.services.map(service => {
					return (
						<ServiceCard
							key={service.Id}
							service={service}
							currency={this.props.currency}
						/>
					)
				})}
			</div>
		)
	}
}

export default ServiceCardContainer
