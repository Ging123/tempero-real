import mongoose from "mongoose";
const Schema = mongoose.Schema;

class SecretModel {

  private readonly secretSchema = new Schema({
    userEmail: {
      type:String,
      required:true,
      maxLength:100,
      index:true,
      unique: true
    },
    secret: {
      type:String,
      unique:true,
      index:true
    }
  });

  protected readonly secretModel = mongoose.models.secret || mongoose.model('secret', this.secretSchema);

  protected createNewUser(userEmail:string, secret:string) {
    return new this.secretModel({
      userEmail:userEmail,
      secret:secret
    });
  }
}

export default SecretModel;