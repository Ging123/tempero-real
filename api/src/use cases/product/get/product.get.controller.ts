import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import ProductGetUseCase from './product.get.use.case';

const route = express.Router();
const product = new ProductGetUseCase();

route.get('/', authUser, async (req, res) => {
  try {
    const allProducts = await product.get();
    res.status(200).json(allProducts);
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

export default route;