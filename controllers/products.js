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
	// const products3 = await Product.find( {} ).select('name price');
	
	// MODO DE PESQUISA 4
	const products4 = await Product.find( { price: { $gt: 30 } })
		.sort('price')
		.select('name price');
	
	res.status(200).json({ nbHits: products4.length, products4 });
};

const getAllProducts = async (req, res) => {
	console.log('req.query ', req.query);
	
	const { featured, company, name, sort, field, numericFilters } = req.query;
	
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
	
	if (numericFilters) {
		console.log('numericFilters.........', numericFilters);
		
		// Mapping Operators Known by Mongoose
		const operatorMap = {
			'>': '$gt',
			'>=': '$gte',
			'=': '$eq',
			'<': '$lt',
			'<=': '$lte'
		};
		const regEx = /\b(<|>|>=|=|<=)\b/g;
		
		let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
		console.log('converted numFilter....', filters);
		
		const options = ['price', 'rating'];
		filters = filters.split(',').forEach((item) => {
			const [ field, operator, value ] = item.split('-');
			
			if (options.includes(field)) {
				queryObject[field] = { [operator]: Number(value) };
			}
		});
	}
	
	// console.log('queryObject......... ', queryObject);
	
	let basicSearch = Product.find( queryObject );
	
	// SORT DATA
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
	
	// LIMIT DATA
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit;
	
	basicSearch = basicSearch.skip(skip).limit(limit);
	
	// FINAL QUERY OBJECT
	const products = await basicSearch;
	
	res.status(200).json({ nbHits: products.length, products });
};




module.exports = {
	getAllProductsStatic,
	getAllProducts
};




