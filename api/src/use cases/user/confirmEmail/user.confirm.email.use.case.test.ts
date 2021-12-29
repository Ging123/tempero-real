import mongose from 'mongoose';
import SecretRepository from '../../../repositories/secret.repository';
import UserRepository from '../../../repositories/user.repository';
import UserConfirmEmailUseCase from './user.confirm.email.use.case';

const user = new UserConfirmEmailUseCase();
const repository = new UserRepository();
const secret = new SecretRepository();
const email = 'UserConfirmEmailUseCase@outlook.com';
var code = '';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
}, 20000);

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
}, 20000);

async function makeUserNotConfirmed() {
  const userToTest = await repository.findOneByEmail(email);
  userToTest.notConfirmed = true;
  await userToTest.save();
  const codeFound = await secret.insert(email);
  code = codeFound.secret;
}

test('Test: confirm an email with an invalid code', async () => {
  try {
    await repository.insert({
      email:email,
      username:'UserConfirmEmailUseCase',
      password:'123456789'
    });
    await makeUserNotConfirmed();
    await user.confirmEmail(email, '');
  }
  catch(err:any) {
    const invalidCode = 'Código de verificação inválido';
    expect(err.message).toBe(invalidCode);
  }
});

test('Test: confirm an email', async () => {
  await user.confirmEmail(email, code).then(() => expect(true).toBe(true));
});

test('Test: confirm an email that doesnt exists', async () => {
  try {
    await user.confirmEmail('', code);
  }
  catch(err:any) {
    const emailDoesntExists = 'Esse email não existe no sistema';
    expect(err.message).toBe(emailDoesntExists);
  }
});

test('Test: confirm an email that is already confimed', async () => {
  try {
    await user.confirmEmail(email, code);
  }
  catch(err:any) {
    const userAlreadyConfirmed = 'Seu email já foi confirmado';
    expect(err.message).toBe(userAlreadyConfirmed);
  }
});