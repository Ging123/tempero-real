import mongose from 'mongoose';
import SecretRepository from '../../../repositories/secret.repository';
import SecretVerifyIfEmailHasUseCase from './use_case';

const secret = new SecretVerifyIfEmailHasUseCase();
const repository = new SecretRepository();
const email = 'SecretVerifyIfEmailHasUseCase@outlook.com';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});

test('Test: verify if an email has a secret', async () => {
  const insertedSecret = await repository.insert(email);
  const secretFound = secret.verifyIfEmailHasSecret(email, insertedSecret.secret);
  expect(secretFound).toBeDefined();
});

test('Test: verify email with an invalid code', async () => {
  try { 
    await secret.verifyIfEmailHasSecret(email, 'ooskadoksao');
  }
  catch(err:any) {
    const invalidCode = 'Código de verificação inválido';
    expect(err.message).toBe(invalidCode);
  }
});