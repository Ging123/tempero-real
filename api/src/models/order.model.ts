import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface order {
  nameOfTheProduct:string;
  quantity:number;
}

class OrderModel {

  private readonly orderSchema = new Schema({
    usernameOfTheOwner: {
      type:String,
      required:true,
      maxLength:30,
      index:true,
      unique: true
    },
    order: {
      type:Array,
      required:true,
    }
  });

  protected readonly orderModel = mongoose.models.order || mongoose.model('order', this.orderSchema);

  protected createNewUser(usernameOfTheOwner:string, order:order[]) {
    return new this.orderModel({
      usernameOfTheOwner:usernameOfTheOwner,
      order:order
    });
  }
}

export default OrderModel;