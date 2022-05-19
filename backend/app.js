const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

//Middleware
app.use(express.json());

//MiddleWare For Erros
app.use(errorMiddleware);

//Route Imports
const products = require('./routes/productRoute');

app.use('/api/v1', products);

module.exports = app;
