import mongose from 'mongoose';
import UserRepository from '../../../repositories/user.repository';
import UserDeleteUseCase from './user.delete.use.case';

const user = new UserDeleteUseCase();
const repository = new UserRepository();
const email = 'UserDeleteUseCase@hotmail.com';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: delete an user', async () => {
  await repository.insert({
    email:email,
    username:'UserDeleteUseCase',
    password:'123456789'
  });
  await user.delete(email);
});

afterAll(async () => {
  await mongose.disconnect();
});