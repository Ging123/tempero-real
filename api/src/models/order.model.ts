import mongoose from "mongoose";
const Schema = mongoose.Schema;

export type orderStatus = 'Em andamento'|'Comprado'|'Cancelado';

export interface order {
  nameOfTheProduct:string;
  quantity:number;
  address:string;
  status:orderStatus;
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

  protected createNewOrder(usernameOfTheOwner:string, order:order[]) {
    return new this.orderModel({
      usernameOfTheOwner:usernameOfTheOwner,
      order:order
    });
  }
}

export default OrderModel;