import OrderModel from "../models/order.model";

class OrderRepository extends OrderModel {

  public async find() {
    return await this.orderModel.find({});
  }

  public async findByOwner(usernameOfTheOwner:string) {
    return await this.orderModel.find({usernameOfTheOwner:usernameOfTheOwner});
  }
}

export default OrderRepository;