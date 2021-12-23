import mongose from 'mongoose';
import UserRepository from '../../../repositories/user.repository';
import UserCreateUseCase from './user.create.use.case';

const user = new UserCreateUseCase();
const repository = new UserRepository();
const email = 'UserCreateUseCase@outlook.com';
const username = 'UserCreateUseCase';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

test('Test: Create an account with an invalid email', async () => {
  try {
    await user.create({
      email:'2kkkk',
      username:'UserCreateUseCase',
      password:'123456789'
    });
  }
  catch(err:any) {
    const invalidEmail = 'Email inválido';
    expect(err.message).toBe(invalidEmail);
  }
});

test('Test: Create an account without an email', async () => {
  try {
    await user.create({
      email:'',
      username:'UserCreateUseCase',
      password:'123456789'
    });
  }
  catch(err:any) {
    const emailEmpty = 'Campo de email não foi preenchido';
    expect(err.message).toBe(emailEmpty);
  }
});

test('Test: Create an account with email length too big', async () => {
  try {
    await user.create({
      email:'kokasodksaodksaokdoaskdoksaodoksdsoakdoskaodksaokdoskadoksoakdosakdoskadokasodkosakdosakdoaskdokasdokasodkasokdoaskdoaswodw@hotmail.com',
      username:'UserCreateUseCase',
      password:'123456789'
    });
  }
  catch(err:any) {
    const emailLengthTooBig = 'Email inválido';
    expect(err.message).toBe(emailLengthTooBig);
  }
});

test('Test: Create an account without an username', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'',
      password:'123456789'
    });
  }
  catch(err:any) {
    const emptyUsername = 'Campo de nome de usuário não foi preenchido';
    expect(err.message).toBe(emptyUsername);
  }
});

test('Test: Create an account with length greater than allowed', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'asfpasofksoakfosakfoksofkosakfoksoafkokasofkasofkosaofksaofksaofksaofksaofkosakfosakfosakfosakfosakfosakfosakfosakfosakfosak',
      password:'123456789'
    });
  }
  catch(err:any) {
    const usernameTooBig = 'Nome de usuario deve ter no máximo 30 caracteries';
    expect(err.message).toBe(usernameTooBig);
  }
});

test('Test: Create an account without password', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'UserCreateUseCase',
      password:''
    });
  }
  catch(err:any) {
    const passwordEmpty = 'Campo de senha não foi preenchido';
    expect(err.message).toBe(passwordEmpty);
  }
});

test('Test: Create an account with password greater than allowed', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'UserCreateUseCase',
      password:'asdsadaksd92kdoskadosakdosa84soajfosajfsaofsa0fsafsaoifas9fsa8fsajfisajfsa8fsa8fjsa8fjs8fjs8af'
    });
  }
  catch(err:any) {
    const passwordTooBig = 'Senha deve ter no máximo 30 caracteries';
    expect(err.message).toBe(passwordTooBig);
  }
});

test('Test: Create an account with password shorter than allowed', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'UserCreateUseCase',
      password:'hello'
    });
  }
  catch(err:any) {
    const passwordTooShort = 'Senha deve ter no mínimo 7 caracteries';
    expect(err.message).toBe(passwordTooShort);
  }
});

test('Test: Create an account with password shorter than allowed', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase@outlook.com',
      username:'UserCreateUseCase',
      password:'hello'
    });
  }
  catch(err:any) {
    const passwordTooShort = 'Senha deve ter no mínimo 7 caracteries';
    expect(err.message).toBe(passwordTooShort);
  }
});

test('Test: Create an user', async () => {
  await user.create({
    email:email,
    username:username,
    password:'123456789'
  });
});

test('Test: Create an account with email that alredy exists', async () => {
  try {
    await user.create({
      email:email,
      username:'UserCreateUseCase',
      password:'helloaaaaa'
    });
  }
  catch(err:any) {
    const emailAlredyExists = 'Esse email já está sendo utilizado';
    expect(err.message).toBe(emailAlredyExists);
  }
});

test('Test: Create an account with username that alredy exists', async () => {
  try {
    await user.create({
      email:'UserCreateUseCase2@outlook.com',
      username:username,
      password:'helloaaaa'
    });
  }
  catch(err:any) {
    const usernameAlredyExists = 'Esse nome de usuário já está sendo utilizado';
    expect(err.message).toBe(usernameAlredyExists);
  }
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});