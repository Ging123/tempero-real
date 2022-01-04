import mongose from 'mongoose';
import SecretRepository from '../../../repositories/secret.repository';
import SecretCreateUseCase from './secret.create.use.case';

const secret = new SecretCreateUseCase();
const repository = new SecretRepository();
const email = 'SecretCreateUseCase@outlook.com';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: create an secret code', async () => {
  await secret.create(email).
  then((secretCode) => expect(secretCode).toBeDefined())
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});