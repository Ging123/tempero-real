import ProductRepository from "../../../repositories/product.repository";
import exception from "../../../utils/exception";

class ProductUpdateStockUseCase {

  private readonly product = new ProductRepository();
  
  public async updateStock(productName:string, newStock:number) {
    this.validate(productName, newStock);
    const product = await this.getProduct(productName);
    await this.product.updateStock(product, newStock);
  }

  private validate(productName:string, newStock:number) {
    const emptyProductName = 'Campo do nome do produto não foi preenchido';
    const newStockEmpty = 'Campo de número de produtos em estoque não foi preenchido';
    const invalidStockQuantity = 'Número de produtos em estoque inválido';
    const stockGreaterThanAllowed = 'Número de produtos deve ser no máximo 1000';
    if(!productName) throw exception(emptyProductName);
    if(!newStock) throw exception(newStockEmpty);
    if(newStock < 0) throw exception(invalidStockQuantity); 
    if(newStock > 1000) throw exception(stockGreaterThanAllowed);
  }

  private async getProduct(productName:string) {
    const productDoesntExists = 'Esse produto não existe';
    const product = await this.product.findOneByName(productName);
    if(!product) throw exception(productDoesntExists);
    return product;
  }
}

export default ProductUpdateStockUseCase;