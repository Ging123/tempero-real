import mongose from 'mongoose';
import UserRepository from '../../../repositories/user.repository';
import LoginUseCase from './user.login.use.case';

const user = new LoginUseCase;
const repository = new UserRepository();
const email = 'userLoginUseCase@outlook.com';
const username = 'userLoginUseCase';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: Login with an email or username that doesnt exists', async () => {
  try {
    await user.login(email, '123456789');
  }
  catch(err:any) {
    const emailOrUsernameDoesntExists = 'Esse email ou nome de usuário não existe';
    expect(err.message).toBe(emailOrUsernameDoesntExists);
  }
});

test('Test: Login', async () => {
  await repository.insert({
    email:email, 
    username:'userLoginUseCase', 
    password:'123456789'
  });
  const token = await user.login(email, '123456789');
  expect(token).toBeTruthy();
});

test('Test: Login with a wrong password', async () => {
  try {
    await user.login(email, '55555555555555');
  }
  catch(err:any) {
    const wrongPassword = 'Senha digitada errada';
    expect(err.message).toBe(wrongPassword);
  }
});

test('Test: Login with an account that is already logged', async () => {
  try {
    await user.login(username, '123456789');
  }
  catch(err:any) {
    const userAlredyLogged = 'Você já está logado';
    expect(err.message).toBe(userAlredyLogged);
  }
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});