import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import UserDeleteUseCase from './user.delete.use.case';

const user = new UserDeleteUseCase();
const route = express.Router();

route.delete('/', async (req:any, res) => {
  try {
    const email = req.user.email;
    await user.delete(email);
    res.status(204).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

export default route;