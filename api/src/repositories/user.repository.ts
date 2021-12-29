import UserModel, { user } from "../models/user.model";
import Token from "../utils/token";
import bcrypt from 'bcrypt';

class UserRepository extends UserModel {

  private token = new Token();

  public async insert(userData:user) {
    const user = this.createNewUser(userData);
    await this.encryptPassword(user);
    await user.save();
    return user;
  }

  private async encryptPassword(user:any) {
    await bcrypt.hash(user.password + process.env.SALT_SECRET!, 10)
    .then((encryptPassword:string) => user.password = encryptPassword);
  }

  public async login(user:any) {
    const token = this.token.create(user);
    user.token = token;
    await user.save();
    return token;
  }

  public async logout(user:any) {
    user.token = '';
    await user.save();
  }

  public async confirmAccount(user:any) {
    user.notConfirmed = undefined;
    await user.save();
  }

  public async deleteOneByEmail(email:string) {
    return await this.userModel.deleteOne({email:email});
  }

  public async findOneByEmail(email:string) {
    return await this.userModel.findOne({email:email});
  }

  public async findOneByUsername(username:string) {
    return await this.userModel.findOne({username:username});
  }

  public async findByEmailOrUsername(emailOrUsername:string) {
    const query = {$or:[
      {email:emailOrUsername},
      {username:emailOrUsername}
    ]};
    return await this.userModel.findOne(query);
  }

  public async findByToken(token:string) {
    return await this.userModel.findOne({token:token});
  }
}

export default UserRepository;