import exception, { verifyIfIsAnInternalException, error } from "../utils/exception";
import UserRepository from "../repositories/user.repository";
import { Response } from "express";
import Token from "../utils/token";

const user = new UserRepository();
const token = new Token();

export async function authUser(req:any, res:Response, next:() => void) {
  try {
    const sentToken = req.headers["authorization"]!;
    token.validate(sentToken);
    const userFound = await searchUserByToken(sentToken);
    req.user = userFound;
    next();
  }
  catch(err:any) {
    const error:error = verifyIfIsAnInternalException(err);
    return res.status(error.status).json(error.message);
  }
}

async function searchUserByToken(tokenSent:string) {
  const userIsNotLogged = 'Você não está logado';
  const userFound = await user.findByToken(tokenSent);
  if(!userFound) throw exception(userIsNotLogged, 401);
  return userFound;
}