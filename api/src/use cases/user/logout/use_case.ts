import UserRepository from "../../../repositories/user.repository";

class UserLogoutUseCase {

  private readonly user = new UserRepository();

  public async logout(user:any) {
    await this.user.logout(user);
  }
}

export default UserLogoutUseCase;