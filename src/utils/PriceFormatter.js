/**
 * Funktion för att se till att det blir
 * ett fint antal decimaler baserat på hur högt priset är
 * @param {number} price som skall formateras
 * @returns {string} Priset med korrekt antal decimaler.
 */
exports.formatPrice = price => {
	/**
	 * Intern metod för att kolla om det avrundade priset är jämnt
	 * @param {number} priceWithDecimals
	 * @returns {string/number} priset med korrekt antal decimaler.
	 */
	const roundCheck = priceWithDecimals => {
		if (priceWithDecimals == Math.round(price)) {
			return Math.round(price)
		} else {
			return priceWithDecimals
		}
	}
	if (price <= 1) {
		return roundCheck(price.toFixed(3))
	}
	if (price > 1 && price <= 10) {
		return roundCheck(price.toFixed(2))
	}
	if (price > 10 && price <= 100) {
		return roundCheck(price.toFixed(1))
	}
	if (price > 100) {
		return Math.round(price)
	} else {
		return price
	}
}
