import Api from '../../../../services/api';

class LoginUseCase {

  private api = new Api();

  public async login(emailOrUsername:string, password:string) {
    this.validatePassword(password);
    await this.api.loginUser(emailOrUsername, password)
    .catch((err) => { throw err.response.data });
  }

  private validatePassword(password:string) {
    const wrongPassword = "Seu email ou nome de usuário ou senha foi digitado errado";
    if(password.length < 7) throw wrongPassword;
  }
}

export default LoginUseCase;