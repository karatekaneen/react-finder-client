import React, { Component } from 'react'
import ServiceCard from './ServiceCard'

/**
 * Komponent för att loopa över alla annonser att visa
 */
class ServiceCardContainer extends Component {
	render() {
		const services = this.props.services.map(service => {
			return (
				<ServiceCard
					key={service.Id}
					service={service}
					currency={this.props.currency}
				/>
			)
		})
		return <div className="card-columns">{services}</div>
	}
}

export default ServiceCardContainer
