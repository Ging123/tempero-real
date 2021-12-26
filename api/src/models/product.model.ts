import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface product {
  name:string;
  stock:number;
  price:number;
}

class ProductModel {

  private readonly productSchema = new Schema({
    name: {
      type:String,
      required:true,
      maxLength:100,
      index:true,
      unique: true
    },
    stock: {
      type:Number,
      required:true,
      max:1000,
    },
    price: {
      type:Number,
      index:true,
      required:true,
      max:100
    }
  });

  protected readonly productModel = mongoose.models.product || mongoose.model('product', this.productSchema);

  protected createNewUser(product:product) {
    return new this.productModel({
      name:product.name,
      stock:product.stock,
      price:product.price
    });
  }
}

export default ProductModel;