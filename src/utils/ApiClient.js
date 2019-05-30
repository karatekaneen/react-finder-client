const axios = require('axios')

/**
 * Metod för att hämta valutakurser
 * @returns {Promise} Svar fårn API.
 */
const getExchangeRates = () => {
	return new Promise((resolve, reject) => {
		axios
			.get('https://api.exchangeratesapi.io/latest?base=SEK')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => reject(err))
	})
}

/**
 * Metod för att hämta Annonser
 * @returns {Promise} Svar fårn API.
 */
const getServices = () => {
	return new Promise((resolve, reject) => {
		axios
			.get('http://193.10.202.78/AnnonsRestApi/api/Service')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => reject(err))
	})
}

/**
 * Sammanslagen metod för att hämta både valutakurser
 * och annonser samtidigt.
 * @returns {object} API-data
 * @property exchangeRates - valutakurser
 * @property services - annonser
 */
exports.loadData = () => {
	return new Promise((resolve, reject) => {
		const exchangeRates = getExchangeRates()
		const services = getServices()

		Promise.all([exchangeRates, services])
			.then(data => {
				resolve({ exchangeRates: data[0], services: data[1] })
			})
			.catch(err => reject(err))
	})
}
