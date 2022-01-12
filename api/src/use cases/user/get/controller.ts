import express from 'express';
import { authUser } from '../../../middlewares/auth';

const route = express.Router();

route.get('/', authUser, (req:any, res) => {
  res.status(200).json({
    id:req.user._id,
    email:req.user.email,
    username:req.user.username,
    role:req.user.role
  });
});

module.exports = route;