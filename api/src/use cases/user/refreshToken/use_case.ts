import UserRepository from "../../../repositories/user.repository";

class UserRefreshTokenUseCase {

  private readonly user = new UserRepository();

  public async refreshToken(user:any) {
    const newToken = await this.user.login(user);
    return newToken;
  }
}

export default UserRefreshTokenUseCase;