import express from 'express';

const route = express.Router();
const getAllProductsRoute = require('../use cases/product/getAll/controller');
const updateProductStock = require('../use cases/product/update stock/controller');

route.use(getAllProductsRoute);
route.use(updateProductStock);

module.exports = route;