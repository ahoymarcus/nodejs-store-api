// CONTROLLERS
const Product = require('../models/product');



const getAllProductsStatic = async (req, res) => {
	// Here, the test with Express-async-errors
	//throw new Error('Testing async errors');
	
	// MODO DE PESQUISA 1
	// const search = 'ab';
	// const products = await Product.find({ 
		// name: { $regex: search, $options: 'i' },  
	// });
	
	// MODO DE PESQUISA 2
	// const products2 = await Product.find( {} ).sort('-name price' );
	
	// MODO DE PESQUISA 3
	const products3 = await Product.find( {} ).select('name price');
	
	res.status(200).json({ nbHits: products3.length, products3 });
};

const getAllProducts = async (req, res) => {
	console.log('req.query ', req.query);
	
	const { featured, company, name, sort, field } = req.query;
	
	const queryObject = {};
	
	if (featured) {
		// Validando o valor presente
		queryObject.featured = featured === 'true' ? true : false;
	}
	if (company) {
		queryObject.company = company;
	}
	if (name) {
		queryObject.name = { $regex: name, $options: 'i' };
	}
	
	console.log('queryObject..... ', queryObject);
	
	let basicSearch = Product.find( queryObject );
	
	// SORT FIELDS
	if (sort) {
		console.log(sort);
		
		// Tranform string with ',' to ' '
		const sortList = sort.split(',').join(' ');
		
		basicSearch = basicSearch.sort(sortList);
	} else {
		basicSearch = basicSearch.sort('createdAt');
	}
	
	// SELECT FIELDS
	if (field) {
		// Tranform string with ',' to ' '
		const fieldsList = field.split(',').join(' ');
		
		basicSearch = basicSearch.select(fieldsList);
	} 
	
	const products = await basicSearch;
	
	res.status(200).json({ nbHits: products.length, products });
};




module.exports = {
	getAllProductsStatic,
	getAllProducts
};




