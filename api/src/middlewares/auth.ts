import exception, { verifyIfIsAnInternalException, error } from "../utils/exception";
import UserRepository from "../repositories/user.repository";
import { Response } from "express";
import Token from "../utils/token";

const user = new UserRepository();

export async function authUser(req:any, res:Response, next:() => void) {
  try {
    const sentToken = req.headers["authorization"]!;
    Token.validate(sentToken);
    const userFound = await searchUserByToken(sentToken);
    req.user = userFound;
    next();
  }
  catch(err:any) {
    const error:error = verifyIfIsAnInternalException(err);
    return res.status(error.status).json(error.message);
  }
}

export function authAdmin(req:any, res:Response, next:() => void) {
  const userIsNotAnAdimn = 'Você não é um administrador';
  const userIsAdmin = req.user.role === 'admin';
  if(userIsAdmin) return next();
  res.send(403).json(userIsNotAnAdimn);
}

async function searchUserByToken(tokenSent:string) {
  const userIsNotLogged = 'Você não está logado';
  const userIsNotConfirmed = 'Você não está confirmado';
  const userFound = await user.findByToken(tokenSent);
  if(!userFound) throw exception(userIsNotLogged, 401);
  if(userFound.notConfirmed) throw exception(userIsNotConfirmed, 401);
  return userFound;
}