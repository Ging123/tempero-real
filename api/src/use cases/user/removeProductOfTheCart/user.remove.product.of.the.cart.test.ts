import mongose from 'mongoose';
import ProductRepository from '../../../repositories/product.repository';
import UserRepository from '../../../repositories/user.repository';
import UserRemoveProductOfTheCartUseCase from './user.remove.product.of.the.cart.use.case';

const user = new UserRemoveProductOfTheCartUseCase();
const product = new ProductRepository();
const repository = new UserRepository();
const email = 'UserRemoveProductOfTheCartUseCase@hotmail.com';
const username = 'UserRemoveProductOfTheCart';
const password = 'UserRemoveProductOfTheCart';
var userToTest:any;

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
  userToTest = await repository.insert({
    email:email,
    username:username,
    password:password
  });
});

afterAll(async () => {
  await repository.deleteOneByEmail(email);
  await mongose.disconnect();
});

test('Test: Delete a product of an user cart', async () => {
  await product.deleteMany();
  await product.insertSpices();
  await repository.addProductInCart(userToTest, {
    name:'Tempero amarelo',
    quantity:1
  });
  await user.remove(userToTest, 'Tempero amarelo')
  .then(() => expect(true).toBe(true));
});

test('Test: Delete a product that doesnt exists in the cart', async () => {
  try {
    await user.remove(userToTest, 'Tempero amarelo');
  }
  catch(error:any) {
    const cartDoenstHasThisProduct = 'Você não possui esse produto no carrinho';
    expect(error.message).toBe(cartDoenstHasThisProduct);
  }
});