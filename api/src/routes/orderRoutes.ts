import express from 'express';

const route = express.Router();
const addOrderRoute = require('../use cases/order/add/controller');
const cancelOrderRoute = require('../use cases/order/cancel/controller');
const getAllOrdersRoute = require('../use cases/order/getAll/controller');
const getOneOrderRoute = require('../use cases/order/getOne/controller');

route.use(addOrderRoute);
route.use(cancelOrderRoute);
route.use(getAllOrdersRoute);
route.use(getOneOrderRoute);

module.exports = route;