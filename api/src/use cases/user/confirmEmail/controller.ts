import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import UserConfirmEmailUseCase from './use_case';

const route = express.Router();

route.post('/confirmEmail', async (req, res) => {
  try {
    const { email, code } = req.query;
    const user = new UserConfirmEmailUseCase();
    await user.confirmEmail(`${email}`, `${code}`);
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;