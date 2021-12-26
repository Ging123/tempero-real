import { authUser } from '../../../middlewares/auth';
import express from 'express';
import UserLogoutUseCase from './user.logout.use.case';
import { verifyIfIsAnInternalException } from '../../../utils/exception';

const user = new UserLogoutUseCase();
const route = express.Router();

route.delete('/logout', authUser ,async (req:any, res) => {
  try {
    await user.logout(req.user);
    res.status(204).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});