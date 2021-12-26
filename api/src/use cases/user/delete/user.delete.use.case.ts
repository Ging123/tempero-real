import UserRepository from "../../../repositories/user.repository";

class UserDeleteUseCase {

  private readonly user = new UserRepository();

  public async delete(email:string) {
    await this.user.deleteOneByEmail(email);
  }
}

export default UserDeleteUseCase;