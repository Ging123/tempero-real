import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose";
const Schema = mongoose.Schema;

class SecretModel {

  private readonly expiresTime = '15m';

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
      required:true,
      index:true
    },
    expireAt: {
      type: Date,
      default: Date.now,
      required:true,
      index: { expires: this.expiresTime }
    }
  });

  protected readonly secretModel = mongoose.models.secret || mongoose.model('secret', this.secretSchema);

  protected createNewSecret(userEmail:string) {
    return new this.secretModel({
      userEmail:userEmail,
      secret:uuidv4()
    });
  }
}

export default SecretModel;