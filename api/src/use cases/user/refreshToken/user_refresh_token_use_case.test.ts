import mongose from 'mongoose';
import UserRepository from '../../../repositories/user.repository';
import UserRefreshTokenUseCase from './use_case';

const user = new UserRefreshTokenUseCase();
const repository = new UserRepository();
const email = 'UserRefreshTokenUseCase@hotmail.com';
const username = 'UserRefreshTokenUseCase';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: Refresh user token', async () => {
  await repository.insert({
    email:email, 
    username:username,
    password:'123456789'
  });
  const userToTest = await repository.findOneByEmail(email);
  await user.refreshToken(userToTest);
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});