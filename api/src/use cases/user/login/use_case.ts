import UserRepository from "../../../repositories/user.repository";
import exception from "../../../utils/exception";
import bcrypt from 'bcrypt';

class LoginUseCase {

  private readonly user = new UserRepository();

  public async login(emailOrUsename:string, password:string) {
    const userFound = await this.getUserByEmailOrUsername(emailOrUsename);
    await this.verifyIfPasswordMatchTheUser(userFound.password, password);
    this.verifyIfUserIsAlredyLogged(userFound);
    const token = await this.user.login(userFound);
    return token;
  }

  private async getUserByEmailOrUsername(emailOrUsename:string) {
    const emailOrUsernameDoesntExists = 'Esse email ou nome de usuário não existe';
    const user = await this.user.findByEmailOrUsername(emailOrUsename);
    if(!user) throw exception(emailOrUsernameDoesntExists);
    return user;
  }

  private async verifyIfPasswordMatchTheUser(hashPassword:string, typedPassword:string) {
    const wrongPassword = 'Senha digitada errada';
    typedPassword += process.env.SALT_SECRET!;
    const match = await bcrypt.compare(typedPassword, hashPassword);
    if(!match) throw exception(wrongPassword);
  }

  private verifyIfUserIsAlredyLogged(user:any) {
    const userAlredyLogged = 'Você já está logado';
    if(user.token) throw exception(userAlredyLogged); 
  }
}

export default LoginUseCase;