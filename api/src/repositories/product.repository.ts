import ProductModel from "../models/product.model";

class ProductRepository extends ProductModel {

  public async findAll() {
    return await this.productModel.find({});
  }
}

export default ProductRepository;