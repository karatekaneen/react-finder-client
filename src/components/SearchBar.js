import React, { Component } from 'react'
class SearchBar extends Component {
	constructor(props) {
		super(props)

		/**
		 * När onChange triggas så söker vi i arrayen med alla annonser efter vår söksträng
		 */
		this.emitChange = event => {
			this.props.setSelectedServices(
				this.customSearch(event.target.value, this.props.services)
			)
		}

		/**
		 * Sökmetod för att leta i arrayen med alla annonser.
		 * Case-insensitive.
		 * @param {string} searchString Sträng att söka efter
		 * @param {Array} arrayToSearch Alla annonser vi kan söka i.
		 * @returns {Array} Filtrerade annonser
		 */
		this.customSearch = (searchString, arrayToSearch) => {
			const s = searchString.toLowerCase()
			return arrayToSearch.filter(item => {
				return (
					item.Title.toLowerCase().includes(s) ||
					item.Description.toLowerCase().includes(s) ||
					item.SubCategory.Titel.toLowerCase().includes(s) ||
					item.SubCategory.ParentCategory.Titel.toLowerCase().includes(s)
				)
			})
		}
	}
	render() {
		return (
			// <div className="col-sm-12 input-group-lg ">
			<div className="input-group input-group-lg">
				<div className="input-group-prepend">
					<span className="input-group-text" id="inputGroup-sizing-lg">
						Sök:
					</span>
				</div>
				<input
					type="text"
					className="form-control"
					onChange={this.emitChange}
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-lg"
				/>
			</div>
		)
	}
}

export default SearchBar
