import mongose from 'mongoose';
import ProductRepository from '../../../repositories/product.repository';
import ProductUpdateStockUseCase from './product.update.stock.use.case';

const product = new ProductUpdateStockUseCase();
const repository = new ProductRepository();

beforeAll(async () => {
  await mongose.connect(process.env.DB_URL_TEST!);
  await repository.deleteMany();
  await repository.insertSpices();
});

afterAll(async () => {
  await repository.deleteMany();
  await mongose.disconnect();
});

test('Test: Update stock of an product without its name', async () => {
  try {
    await product.updateStock('', 20);
  }
  catch(error:any) {
    const emptyProductName = 'Campo do nome do produto não foi preenchido';
    expect(error.message).toBe(emptyProductName);
  }
});

test('Test: Update product stock to a number shorther than 0', async () => {
  try {
    await product.updateStock('Tempero vermelho', -20);
  }
  catch(error:any) {
    const invalidStockQuantity = 'Número de produtos em estoque inválido';
    expect(error.message).toBe(invalidStockQuantity);
  }
});

test('Test: Update stock of a product that doesnt exists', async () => {
  try {
    await product.updateStock('test', 15);
  }
  catch(error:any) {
    const productDoesntExists = 'Esse produto não existe';
    expect(error.message).toBe(productDoesntExists);
  }
});

test('Test: Update stock with a quantity greater than allowed', async () => {
  try {
    await product.updateStock('Tempero vermelho', 15000);
  }
  catch(error:any) {
    const stockGreaterThanAllowed = 'Número de produtos deve ser no máximo 1000';
    expect(error.message).toBe(stockGreaterThanAllowed);
  }
});

test('Test: Update stock of a product', async () => {
  await product.updateStock('Tempero vermelho', 100)
  .then(() => expect(true).toBe(true));
});