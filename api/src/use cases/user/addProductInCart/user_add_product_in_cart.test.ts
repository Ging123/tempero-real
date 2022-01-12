import mongose from 'mongoose';
import ProductRepository from '../../../repositories/product.repository';
import UserRepository from '../../../repositories/user.repository';
import AddProductInCartUseCase from './use_case';

const user = new AddProductInCartUseCase();
const repository = new UserRepository();
const product = new ProductRepository();
const email = 'AddProductInCartUseCase@hotmail.com';
const username = 'AddProductInCartUseCase';
const password = 'AddProductInCartUseCase';
var userToTest:any;

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});

test('Test: Doesnt send the product name', async () => {
  try {
    userToTest = await repository.insert({
      email:email,
      username:username,
      password:password
    });
    await user.addInCart(userToTest, {
      name:"",
      quantity:1
    });
  }
  catch(err:any) {
    const productNameEmpty = 'Campo de nome não foi preenchido';
    expect(err.message).toBe(productNameEmpty);
  }
});

test('Test: Send quantity shorter than 1', async () => {
  try {
    await user.addInCart(userToTest, {
      name:"test",
      quantity:-1
    });
  }
  catch(err:any) {
    const quantityOfProductInvalid = 'Quantidade de produtos deve ser no mínimo 1';
    expect(err.message).toBe(quantityOfProductInvalid);
  }
});

test('Test: Send quantity greater than allowed', async () => {
  try {
    await user.addInCart(userToTest, {
      name:"test",
      quantity:1001
    });
  }
  catch(error:any) {
    const quantityGreaterThanAllowed = 'Quantidade deve ser no máximo 1000 produtos';
    expect(error.message).toBe(quantityGreaterThanAllowed);
  }
});

test('Test: Send product name that doesnt exists', async () => {
  try {
    await user.addInCart(userToTest, {
      name:"test",
      quantity:5
    });
  }
  catch(err:any) {
    const thisProductDoesntExists = 'Esse produto não existe';
    expect(err.message).toBe(thisProductDoesntExists);
  }
});

test('Test: Insert a valid product', async () => {
  await product.deleteMany();
  await product.insertSpices();
  await user.addInCart(userToTest, {
    name:"Tempero vermelho",
    quantity:1
  });
  expect(true).toBe(true);
});

test('Test: Update a product in the cart', async () => {
  await user.addInCart(userToTest, {
    name:"Tempero vermelho",
    quantity:2
  });
  expect(true).toBe(true);
});