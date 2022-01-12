import express from 'express';
import { authAdmin, authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import ProductUpdateStockUseCase from './use_case';

const route = express.Router();
const product = new ProductUpdateStockUseCase();

route.put('/stock', authUser, authAdmin, async (req:any, res) => {
  try {
    const { productName, newStock } = req.body;
    await product.updateStock(productName, newStock);
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;