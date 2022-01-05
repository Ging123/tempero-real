import ProductRepository from "../../../repositories/product.repository";

class ProductGetUseCase {

  private readonly product = new ProductRepository();

  public async get() {
    return await this.product.findAll();
  }
}

export default ProductGetUseCase;