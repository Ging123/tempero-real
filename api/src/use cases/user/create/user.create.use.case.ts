import UserRepository from "../../../repositories/user.repository";
import * as EmailValidator from 'email-validator';
import exception from '../../../utils/exception';
import EmailSender from "../../../external/emailSender";
import SecretCreateUseCase from '../../secret/create/secret.create.use.case';

interface user {
  email:string;
  username:string;
  password:string;
}

class UserCreateUseCase {

  private readonly user = new UserRepository();
  private readonly emailSender = new EmailSender();
  private readonly secret = new SecretCreateUseCase();

  public async create(user:user) {
    this.validateEmail(user.email);
    this.validateProvider(user.email);
    this.validateUsername(user.username);
    this.validatePassword(user.password);
    await this.verifyIfEmailAlredyExists(user.email);
    await this.verifyIfUsernameAlredyExists(user.username);
    const userSaved = await this.user.insert(user);
    if(process.env.MODE! === 'DEV') return this.user.confirmAccount(userSaved);
    await this.sendCodeToVerifyEmail(user.email);
  }

  private validateEmail(email:string) {
    this.validateEmailSyntax(email);
    this.validateEmailLength(email);
  }

  private validateProvider(email:string) {
    const emailProviderInvalid = 'Provedor do email inválido só aceitamos emails outlook, hotmail ou gmail';
    const validProviders = ['outlook', 'hotmail', 'gmail'];
    const emailProvider = this.getEmailProvider(email);
    for(const provider of validProviders) {
      if(emailProvider === provider) return;
    }
    throw exception(emailProviderInvalid);
  }

  private getEmailProvider(email:string) {
    let provider = email.split('@')[1];
    provider = provider.replace('.com', '');
    return provider;
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

  private async sendCodeToVerifyEmail(email:string) {
    const code = await this.secret.create(email);
    const link = this.createLinkToConfirmEmail(email, code.secret);
    this.emailSender.send({
      to:email,
      subject:'Confirmar email',
      text:`
        <h1>Confirme seu email</h1>
        <p>Clique <a href=${link}>aqui</a> para confirmar seu email</p>
      `
    });
  }

  private createLinkToConfirmEmail(email:string, code:string) {
    return `${process.env.API_URL!}user/confirmEmail?email=${email}&code=${code}`;
  }
}

export default UserCreateUseCase;