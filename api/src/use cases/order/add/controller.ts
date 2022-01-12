import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import OrderAddUseCase from './use_case';

const route = express.Router();
const order = new OrderAddUseCase();

route.post('/', authUser, async (req:any, res) => {
  try {
    const orderAdded = await order.add(req.user.username, req.body.order);
    res.status(201).json(orderAdded);
  }
  catch(err) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;