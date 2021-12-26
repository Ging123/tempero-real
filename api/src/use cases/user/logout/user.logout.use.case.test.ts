import mongose from 'mongoose';
import UserRepository from '../../../repositories/user.repository';
import UserLogoutUseCase from './user.logout.use.case';

const user = new UserLogoutUseCase();
const repository = new UserRepository();
const email = 'UserLogoutUseCase@hotmail.com';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: Logout an user', async () => {
  await repository.insert({
    email:email,
    username:'UserLogoutUseCase',
    password:'123456789'
  });
  const userToTest = await repository.findByEmailOrUsername(email);
  await repository.login(userToTest);
  await user.logout(userToTest);
}, 10000);

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});