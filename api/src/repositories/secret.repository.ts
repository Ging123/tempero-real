import SecretModel from "../models/secret.model";

class SecretRepository extends SecretModel {

  public async insert(email:string) {
    const secret = this.createNewSecret(email);
    await secret.save();
    return secret;
  }

  public async deleteByEmail(email:string) {
    await this.secretModel.deleteOne({userEmail:email});
  }
}

export default SecretRepository;