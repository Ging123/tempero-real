import SecretRepository from "../../../repositories/secret.repository";
import UserRepository from "../../../repositories/user.repository";
import exception from "../../../utils/exception";
import SecretVerifyIfEmailHasUseCase from "../../secret/verifyIfEmailHasSecret/secret.verify.if.email.has.use.case";

class UserConfirmEmailUseCase {

  private readonly user = new UserRepository();
  private readonly secret = new SecretVerifyIfEmailHasUseCase();
  private readonly secretRepo = new SecretRepository();

  public async confirmEmail(email:string, code:string) {
    const user = await this.getUser(email);
    await this.secret.verifyIfEmailHasSecret(email, code);
    await this.user.confirmAccount(user);
    await this.secretRepo.deleteOneByEmail(email);
  }

  private async getUser(email:string) {
    const emailDoesntExists = 'Esse email não existe no sistema';
    const userAlreadyConfirmed = 'Seu email já foi confirmado';
    const user = await this.user.findOneByEmail(email);
    if(!user) throw exception(emailDoesntExists);
    if(!user.notConfirmed) throw exception(userAlreadyConfirmed, 403);
    return user;
  }
}

export default UserConfirmEmailUseCase;