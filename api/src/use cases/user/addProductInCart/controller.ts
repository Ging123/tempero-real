import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import AddProductInCartUseCase from './use_case';

const route = express.Router();
const user = new AddProductInCartUseCase();

route.post('/addToCart', authUser, async (req:any, res) => {
  try {
    await user.addInCart (
      req.user,
      req.body.product
    );
    res.status(201).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;