import mongose from 'mongoose';
import OrderRepository from '../../../repositories/order.repository';
import ProductRepository from '../../../repositories/product.repository';
import OrderCancelUseCase from './use_case';

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
  await product.deleteMany();
  await product.insertSpices();
});

afterAll(async () => {
  await repository.deleteAll();
  await product.deleteMany();
  await mongose.disconnect();
});

const order = new OrderCancelUseCase();
const repository = new OrderRepository();
const product = new ProductRepository();
var orderToTest:any;

test('Test: Cancel an order with a username that doesnt have an order created', async () => {
  try {
    orderToTest = await repository.create('OrderCancelUseCase', [{
      nameOfTheProduct:'Tempero amarelo',
      quantity:12,
      address:'kasodsa',
      status:'Em andamento'
    }]);
    await repository.removeAllOrdersFromAnUsername(orderToTest);
    await order.cancel('t', 10);
  }
  catch(err:any) {
    const userDoesntHaveAnOrder = 'Você não tem nenhum pedido registrado ainda';
    expect(err.message).toBe(userDoesntHaveAnOrder);
  }
});

test('Test: Cancel an order of a username that doenst have any order', async () => {
  try {
    await order.cancel('OrderCancelUseCase', 10);
  }
  catch(err:any) {
    const userDoesntHaveAnOrder = 'Você não tem nenhum pedido registrado ainda';
    expect(err.message).toBe(userDoesntHaveAnOrder);
  }
});

test('Test: Cancel an order that doenst exists in the list of an username orders', async () => {
  try {
    await repository.add(orderToTest, [{
      nameOfTheProduct:'Tempero amarelo',
      quantity:12,
      address:'kasodsa',
      status:'Em andamento'
    }]);
    await order.cancel('OrderCancelUseCase', 10);
  }
  catch(err:any) {
    const orderDoesntExists = 'Esse pedido não existe';
    expect(err.message).toBe(orderDoesntExists);
  }
});

test('Test: Cancel an order', async () => {
  const newOrder = await order.cancel('OrderCancelUseCase', 0);
  expect(newOrder.order[0].status).toBe('Cancelado');
});