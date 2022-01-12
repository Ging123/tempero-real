import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import ProductRepository from '../../../repositories/product.repository';

const route = express.Router();
const product = new ProductRepository();

route.get('/', authUser, async (req, res) => {
  try {
    const allProducts = await product.findAll();
    res.status(200).json(allProducts);
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;