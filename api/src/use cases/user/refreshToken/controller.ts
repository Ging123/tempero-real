import express from 'express';
import { authUser } from '../../../middlewares/auth';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import UserRefreshTokenUseCase from './use_case';

const user = new UserRefreshTokenUseCase();
const route = express.Router();

route.put('/token', authUser, async (req:any, res) => {
  try {
    await user.refreshToken(req.user);
    res.status(201).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
}); 

module.exports = route;