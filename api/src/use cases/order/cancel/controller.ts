import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import OrderCancelUseCase from './use_case';

const route = express.Router();
const order = new OrderCancelUseCase()

route.put('/cancel', authUser, async (req:any, res) => {
  try {
    await order.cancel(req.user.username, req.body.orderIndex);
    res.status(204).send();
  }
  catch(err) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;