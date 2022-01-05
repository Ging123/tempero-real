import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import UserRemoveProductOfTheCartUseCase from './user.remove.product.of.the.cart.use.case';

const route = express.Router();
const user = new UserRemoveProductOfTheCartUseCase();

route.delete('/removeProductOfTheCart', authUser, async (req:any, res) => {
  try {
    await user.remove (
      req.user,
      req.body.productName
    );
    res.status(204).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
}); 

export default route;