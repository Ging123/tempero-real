import express from 'express';
import { verifyIfIsAnInternalException } from '../../../utils/exception';
import LoginUseCase from './use_case';

const route = express.Router();
const user = new LoginUseCase();

route.post('/login', async (req, res) => {
  try {
    const {emailOrUsername, password} = req.body;
    await user.login(emailOrUsername, password);
    res.status(201).send();
  }
  catch(err:any) {
    const error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

module.exports = route;