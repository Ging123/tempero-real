import SecretModel from "../models/secret.model";

class SecretRepository extends SecretModel {

  public async insert(email:string) {
    const secret = this.createNewSecret(email);
    await secret.save();
    return secret;
  }

  public async deleteOneByEmail(email:string) {
    await this.secretModel.deleteOne({userEmail:email});
  }

  public async findOneByEmailAndSecretCode(email:string, code:string) {
    return await this.secretModel.findOne({
      userEmail:email,
      secret:code
    });
  }
}

export default SecretRepository;