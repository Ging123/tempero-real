import jwt from 'jsonwebtoken';
import exception from './exception';

class Token {

  private accessTokenTime:string;

  constructor(accessTokenTime='60m') {
    this.accessTokenTime = accessTokenTime;
  }

  public create(user:any) {
    const userData = {
      id:user.id,
      email:user.email,
      username:user.username
    }
    const token = jwt.sign(userData, process.env.SECRET_KEY_OF_TOKEN!, 
      {expiresIn:this.accessTokenTime});
    return token;
  }

  static validate(token:string) {
    const emptyToken = 'Token de acesso não foi enviado';
    const tokenExpired = 'Token de accesso expirou';
    if(!token) throw exception(emptyToken);
    jwt.verify(token, process.env.SECRET_KEY_OF_TOKEN!, (err) => {
      if(err) throw exception(tokenExpired, 403);
    });
  }
}

export default Token;