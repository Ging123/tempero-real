import UserRepository from "../../../repositories/user.repository";
import * as EmailValidator from 'email-validator';
import exception from '../../../utils/exception';

interface user {
  email:string;
  username:string;
  password:string;
}

class UserCreateUseCase {

  private readonly user = new UserRepository();

  public async create(user:user) {
    this.validateEmail(user.email);
    this.validateUsername(user.username);
    this.validatePassword(user.password);
    await this.verifyIfEmailAlredyExists(user.email);
    await this.verifyIfUsernameAlredyExists(user.username);
    await this.user.insert(user);
  }

  private validateEmail(email:string) {
    this.validateEmailSyntax(email);
    this.validateEmailLength(email);
  }

  private validateEmailSyntax(email:string) {
    const invalidEmail = 'Email inválido';
    const emailEmpty = 'Campo de email não foi preenchido';
    const emailIsValid = EmailValidator.validate(email);
    if(!email) throw exception(emailEmpty);
    if(!emailIsValid) throw exception(invalidEmail);
  }

  private validateEmailLength(email:string) {
    const emailLengthTooBig = 'Email deve ter no máximo 100 caracteries';
    if(email.length > 100) throw exception(emailLengthTooBig);
  }

  private validateUsername(username:string) {
    const emptyUsername = 'Campo de nome de usuário não foi preenchido';
    const usernameTooBig = 'Nome de usuario deve ter no máximo 30 caracteries';
    if(!username) throw exception(emptyUsername);
    if(username.length > 30) throw exception(usernameTooBig);
  }

  private validatePassword(password:string) {
    const passwordEmpty = 'Campo de senha não foi preenchido';
    if(!password) throw exception(passwordEmpty);
    this.validatePasswordLength(password);
  }

  private validatePasswordLength(password:string) {
    const passwordTooBig = 'Senha deve ter no máximo 30 caracteries';
    const passwordTooShort = 'Senha deve ter no mínimo 7 caracteries';
    if(password.length > 30) throw exception(passwordTooBig);
    if(password.length < 7) throw exception(passwordTooShort);
  }

  private async verifyIfEmailAlredyExists(email:string) {
    const emailAlredyExists = 'Esse email já está sendo utilizado';
    const user = await this.user.findOneByEmail(email);
    if(user) throw exception(emailAlredyExists);
  }

  private async verifyIfUsernameAlredyExists(username:string) {
    const usernameAlredyExists = 'Esse nome de usuário já está sendo utilizado';
    const user = await this.user.findOneByUsername(username);
    if(user) throw exception(usernameAlredyExists);
  }
}

export default UserCreateUseCase;