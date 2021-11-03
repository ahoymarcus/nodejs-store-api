// CONTROLLERS
const Product = require('../models/product');



const getAllProductsStatic = async (req, res) => {
	// Here, the test with Express-async-errors
	//throw new Error('Testing async errors');
	
	
	const products = await Product.find({ 
		featured: true,  
	});
	
	res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
	console.log('req.query ', req.query);
	
	const { featured, company } = req.query;
	
	const queryObject = {};
	
	if (featured) {
		// Validando o valor presente
		queryObject.featured = featured === 'true' ? true : false;
	}
	if (company) {
		queryObject.company = company;
	}
	
	console.log('queryObject..... ', queryObject);
	
	const products = await Product.find( queryObject );
	
	res.status(200).json({ nbHits: products.length, products });
};




module.exports = {
	getAllProductsStatic,
	getAllProducts
};




