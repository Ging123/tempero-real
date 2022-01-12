import OrderModel, { order } from "../models/order.model";

class OrderRepository extends OrderModel {

  public async create(username:string, order:order[]) {
    const orderToSave = this.createNewOrder(username, order);
    await orderToSave.save();
    return orderToSave;
  }

  public async add(orderToUpdate:any, order:order[]) {
    for(const orderToAdd of order) {
      orderToUpdate.order.push(orderToAdd);
    }
    await orderToUpdate.save();
    return orderToUpdate;
  }

  public async find() {
    return await this.orderModel.find({});
  }

  public async findByOwner(usernameOfTheOwner:string) {
    return await this.orderModel.findOne({usernameOfTheOwner:usernameOfTheOwner});
  }

  public async deleteAll() {
    return await this.orderModel.deleteMany({});
  }
}

export default OrderRepository;