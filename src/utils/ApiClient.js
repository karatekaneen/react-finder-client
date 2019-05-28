const axios = require('axios')
exports.getExchangeRates = async () => {
	return new Promise((resolve, reject) => {
		axios
			.get('https://api.exchangeratesapi.io/latest?base=SEK')
			.then(response => {
				resolve(response.data)
			})
			.catch(err => reject(err))
	})
}
