// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 3º10'32''
require('dotenv').config();
const express = require('express');

const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');



const app = express();

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// Products Route


// 404
app.use(notFound);

// 500
app.use(errorMiddleware);



const port = process.env.PORT || 3000;

const start = () => {
	try {
		// DB Connection
		
		
		app.listen(port, () => {
			console.log(`Server listening at port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};



start();



