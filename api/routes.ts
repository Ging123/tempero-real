import express from 'express';

const routes = express.Router();
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

routes.use('/user', userRoutes);
routes.use('/product', productRoutes);
routes.use('/order', orderRoutes);

export default routes;