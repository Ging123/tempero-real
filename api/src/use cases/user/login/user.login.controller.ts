import express from 'express';
import { verifyIfIsAnInternalException, error } from '../../../utils/exception';
import LoginUseCase from './user.login.use.case';

const route = express.Router();
const user = new LoginUseCase();

route.post('/login', async (req, res) => {
  try {
    const {emailOrUsername, password} = req.body;
    await user.login(emailOrUsername, password);
    res.status(201).send();
  }
  catch(err:any) {
    const error:error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

export default route;