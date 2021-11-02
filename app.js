// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 3º10'32''
require('dotenv').config();
const express = require('express');

const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');  



const app = express(); 

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// Products Route
app.use('/api/v1/products', productsRouter);




// 404
app.use(notFound);

// 500
app.use(errorMiddleware);



const port = process.env.PORT || 3000;

const start = async () => {
	try {
		// DB Connection
		await connectDB(process.env.MONGODB_SRV);
		
		app.listen(port, () => {
			console.log(`Server listening at port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};



start();  



