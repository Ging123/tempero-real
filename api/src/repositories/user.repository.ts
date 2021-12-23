import UserModel, { user } from "../models/user.model";

class UserRepository extends UserModel {

  public async insert(userData:user) {
    const user = this.createNewUser(userData);
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
}

export default UserRepository;