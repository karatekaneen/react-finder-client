import React, { Component } from 'react'
import ServiceCardContainer from './ServiceCardContainer'
import '../assets/components.css'
class ServiceCard extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		const { service, currency } = this.props
		let serviceType = ''
		let timeStamps = ''
		if (service.TimeNeeded) {
			const assignTimeStamps = () => {
				return (
					<div>
						<div className="service-card-time-description">
							<div className="service-card-time-unit">
								<b>Från</b>: {service.StartDate}
							</div>
							<div className="service-card-time-unit">
								<b>Till</b>: {service.EndDate}
							</div>
						</div>
					</div>
				)
			}
			timeStamps = assignTimeStamps()
		}
		if (service.ServiceType.Name == 'Erbjuden') {
			serviceType = <span className="badge badge-primary">Erbjuden</span>
		} else if (service.ServiceType.Name == 'Önskad') {
			serviceType = <span className="badge badge-success">Önskad</span>
		}
		return (
			<div className="card">
				<img
					src={service.Picture}
					className="card-img-top service-card-image"
					alt="Service description image"
				/>
				<div className="card-header">
					<div className="service-card-title">{service.Title}</div>
					<div className="service-card-title service-card-price">
						{(service.Price * currency.factor).toFixed(1)}{' '}
						{currency.label}
					</div>
					{serviceType}
					<div className="service-categories">
						<span className="breadcrumb-item active" aria-current="page">
							{service.SubCategory.ParentCategory.Titel}
						</span>
						<span className="breadcrumb-item active" aria-current="page">
							{service.SubCategory.Titel}
						</span>
					</div>
				</div>
				<div className="card-body">
					<div className="service-card-description">
						<div className="service-card-description-title">
							Beskrivning
						</div>
						<div className="service-card-description-text">
							{service.Description}
						</div>
					</div>
					{timeStamps}
				</div>
			</div>
		)
	}
}
export default ServiceCard
