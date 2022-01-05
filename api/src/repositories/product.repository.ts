import ProductModel from "../models/product.model";

class ProductRepository extends ProductModel {

  public async findAll() {
    return await this.productModel.find({});
  }

  public async findOneByName(name:string) {
    return await this.productModel.findOne({name:name});
  }

  public async updateStock(product:any, newStock:number) {
    product.stock = newStock;
    await product.save();
  }

  public async insertSpices() {
    const spice = ['Tempero vermelho', 'Tempero amarelo'];
    const price = [2.50, 2.50];
    const stock = [100, 150];
    for(let i = 0; i < spice.length; i++) {
      const spiceToInsert = this.createNewProduct({
        name:spice[i],
        price:price[i],
        stock:stock[i]
      });
      await spiceToInsert.save();
    }
  }

  public async deleteMany() {
    await this.productModel.deleteMany({});
  }
}

export default ProductRepository;