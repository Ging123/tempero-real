import mongose from 'mongoose';
import OrderRepository from '../../../repositories/order.repository';
import ProductRepository from '../../../repositories/product.repository';
import OrderAddUseCase from './use_case';

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

const order = new OrderAddUseCase();
const repository = new OrderRepository();
const product = new ProductRepository();

test('Test: Doesnt send the product name', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'',
      quantity:12,
      status:'Em andamento',
      address:'kkkkk sei la'
    }]);
  }
  catch(err:any) {
    const emptyNameOfProduct = 'Nome do produto não foi preenchido';
    expect(err.message).toBe(emptyNameOfProduct);
  }
});

test('Test: Send product name with a length greater than the max allowed', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'asdsadisajdisajdijasidjsaidjsaidjaisjdisadjisajdisadksaofksaofkasofkasofksaokfpasfsapflpaslfpaslfpaslfplaspflpaslfpaslfpaslfplaspflapslfpaslfpaslfplaspflaspflpaslfpaslfplsapflsapflaspflpaslfpaslfpsalfplasplfpaslfpaslfpaslfpasfas',
      quantity:12,
      status:'Em andamento',
      address:'kkkkk sei la'
    }]);
  }
  catch(err:any) {
    const nameOfTheProductTooBig = 'Nome do produto deve ter no máximo 100 caracteries';
    expect(err.message).toBe(nameOfTheProductTooBig);
  }
});

test('Test: Send quantity that is greater than the max allowed', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'aa',
      quantity:12000,
      status:'Em andamento',
      address:'kkkkk sei la'
    }]);
  }
  catch(err:any) {
    const quantityTooBig = 'Quantidade deve ser menor que 1000';
    expect(err.message).toBe(quantityTooBig);
  }
});

test('Test: Send quantity that is shorter than the max allowed', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'aa',
      quantity:0,
      status:'Em andamento',
      address:'kkkkk sei la'
    }]);
  }
  catch(err:any) {
    const quantityTooSmall = 'Quantidade de ser no mínimo 1';
    expect(err.message).toBe(quantityTooSmall);
  }
});

test('Test: Send quantity that is not a integer', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'aa',
      quantity:2.3,
      status:'Em andamento',
      address:'kkkkk sei la'
    }]);
  }
  catch(err:any) {
    const quantityIsNotAnInt = 'Quantidade deve ser um número inteiro';
    expect(err.message).toBe(quantityIsNotAnInt);
  }
});

test('Test: Doesnt send an address', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'aaa',
      quantity:2,
      status:'Em andamento',
      address:''
    }]);
  }
  catch(err:any) {
    const emptyAddress = 'Endereço não foi enviado';
    expect(err.message).toBe(emptyAddress);
  }
});

test('Test: Send an address greater than allowed', async () => {
  try {
    await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'Tempero vermelho',
      quantity:2,
      status:'Em andamento',
      address:'asd asd asd'
    }, 
    {
      nameOfTheProduct:'aaa',
      quantity:2,
      status:'Em andamento',
      address:'asdsadisajdisajdijasidjsaidjsaidjaisjdisadjisajdisadksaofksaofkasofkasofksaokfpasfsapflpaslfpaslfpaslfplaspflpaslfpaslfpaslfplaspflapslfpaslfpaslfplaspflaspflpaslfpaslfplsapflsapflaspflpaslfpaslfpsalfplasplfpaslfpaslfpaslfpasfas'
    }]);
  }
  catch(err:any) {
    const addressTooBig = 'Endereço deve ter no máximo 100 caracteries';
    expect(err.message).toBe(addressTooBig);
  }
});

test('Test: create an order', async () => {
  await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'Tempero amarelo',
      quantity:1,
      status:'Em andamento',
      address:'asdas'
    },
    {
      nameOfTheProduct:'Tempero vermelho',
      quantity:23,
      status:'Em andamento',
      address:'fgff'
    },
    {
      nameOfTheProduct:'Tempero amarelo',
      quantity:25,
      status:'Em andamento',
      address:'asdsbfa'
    }
  ]).then((orderCreated) => expect(orderCreated).toBeDefined());
});

test('Test: create orders', async () => {
  const createdOrders = await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'Tempero amarelo',
      quantity:1,
      status:'Em andamento',
      address:'asdas'
    },
    {
      nameOfTheProduct:'Tempero vermelho',
      quantity:23,
      status:'Em andamento',
      address:'fgff'
    },
    {
      nameOfTheProduct:'Tempero amarelo',
      quantity:25,
      status:'Em andamento',
      address:'asdsbfa'
    }
  ]);
  expect(createdOrders).toBeDefined();
});

test('Test: add orders', async () => {
  const createdOrders = await order.add('OrderAddUseCase', [{
      nameOfTheProduct:'Tempero amarelo',
      quantity:1,
      status:'Em andamento',
      address:'asdas'
    },
    {
      nameOfTheProduct:'Tempero vermelho',
      quantity:23,
      status:'Em andamento',
      address:'fgff'
    },
    {
      nameOfTheProduct:'Tempero amarelo',
      quantity:25,
      status:'Em andamento',
      address:'asdsbfa'
    }
  ]);
  expect(createdOrders).toBeDefined();
});