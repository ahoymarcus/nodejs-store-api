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
	res.status(200).json({ msg: 'products route' });
};




module.exports = {
	getAllProductsStatic,
	getAllProducts
};




