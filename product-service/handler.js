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

const getProductsById = async productId => {
	// const productId = 1
	console.log('productId', productId)
	let body = '{}'
	const filteredProducts = productsData.filter(el => el.id === productId)
	// console.log(filteredProducts.length)
	if (filteredProducts.length !== 0) {
		try {
			// console.log('FP', filteredProducts)
			body = JSON.stringify(filteredProducts)
			// console.log(body)
		} catch (error) {
			console.log(error.message)
		}
	}
	return {
		statusCode: 200,
		body
	}
}

getProductsById('1')//.then(data => { console.log(data) })
module.exports = {
	getProductsList,
	getProductsById
}