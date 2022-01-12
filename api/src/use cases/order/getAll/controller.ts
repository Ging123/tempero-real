import express from 'express';
import { authAdmin, authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import OrderRepository from '../../../repositories/order.repository';

const route = express.Router();
const order = new OrderRepository();

route.get('/all', authUser, authAdmin, async (req, res) => {
  try {
    const ordersFound = await order.find();
    res.status(200).json(ordersFound);
  }
  catch(err) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;