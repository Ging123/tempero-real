import SecretRepository from "../../../repositories/secret.repository";

class SecretCreateUseCase {

  private readonly secret = new SecretRepository();

  public async create(email:string) {
    await this.secret.deleteByEmail(email);
    return await this.secret.insert(email);
  }
}

export default SecretCreateUseCase;