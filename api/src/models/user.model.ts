import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface user {
  email:string;
  username:string;
  password:string;
}

class UserModel {

  private readonly userSchema = new Schema({
    email: {
      type:String,
      required:true,
      maxLength:100,
      index:true,
      unique: true
    },
    username: {
      type:String,
      required:true,
      maxLength:30,
      index:true,
      unique:true
    },
    password: {
      type:String,
      index:true,
      required:true,
      maxlength:100
    },
    role: {
      type:String,
      index:true,
      required:true
    },
    token: {
      type:String,
      index:true
    },
    cart: {
      type:Array
    },
    notConfirmed: {
      type:Boolean
    }
  });

  protected readonly userModel = mongoose.models.user || mongoose.model('user', this.userSchema);

  protected createNewUser(user:user) {
    return new this.userModel({
      email:user.email,
      username:user.username,
      password:user.password,
      role:"user",
      token:'',
      cart:[],
      notConfirmed:true
    });
  }
}

export default UserModel;