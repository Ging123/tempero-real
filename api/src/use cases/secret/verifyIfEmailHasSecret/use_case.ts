import SecretRepository from "../../../repositories/secret.repository";
import exception from "../../../utils/exception";

class SecretVerifyIfEmailHasUseCase {

  private readonly secret = new SecretRepository();

  public async verifyIfEmailHasSecret(email:string, code:string) {
    const invalidCode = 'Código de verificação inválido';
    const secret = await this.secret.findOneByEmailAndSecretCode(email, code);
    if(!secret) throw exception(invalidCode);
    return secret;
  }
}

export default SecretVerifyIfEmailHasUseCase;