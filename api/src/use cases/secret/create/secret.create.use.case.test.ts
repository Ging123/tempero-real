import mongose from 'mongoose';
import SecretRepository from '../../../repositories/secret.repository';
import SecretCreateUseCase from './secret.create.use.case';

const secret = new SecretCreateUseCase();
const repository = new SecretRepository();
const email = 'SecretCreateUseCase@outlook.com';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
}, 20000);

test('Test: create an secret code', async () => {
  await secret.create(email).
  then((secretCode) => expect(secretCode).toBeDefined())
}, 20000);

afterAll(async () => {
  await repository.deleteByEmail(email);
  await mongose.disconnect();
}, 20000);