'use strict';
const productsData = require('./data.json')

const getProductsList = async () => {
	let body = '[]'

	try {
		body = JSON.stringify(productsData)
	} catch (e) { }

	return {
		statusCode: 200,
		body
	};
}

const getProductsById = async (event) => {
	const { productId } = event.pathParameters
	let body = '{}'
	const filteredProducts = productsData.filter(el => el.id === productId)
	if (filteredProducts.length !== 0) {
		try {
			body = JSON.stringify(filteredProducts)
		} catch (error) {
			console.log(error.message)
		}
	}
	return {
		statusCode: 200,
		body
	}
}

module.exports = {
	getProductsList,
	getProductsById
}