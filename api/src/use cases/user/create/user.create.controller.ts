import { verifyIfIsAnInternalException, error } from '../../../utils/exception';
import UserCreateUseCase from './user.create.use.case';
import express from 'express';

const route = express.Router();

route.post('/', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new UserCreateUseCase();
    await user.create({
      email:email,
      username:username,
      password:password
    });
    res.status(201).send();
  }
  catch(err) {
    const error:error = verifyIfIsAnInternalException(err);
    res.status(error.status).json(error.message);
  }
});

export default route;