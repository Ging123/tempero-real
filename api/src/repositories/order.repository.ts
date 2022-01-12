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

  public async cancel(order:any, orderIndex:number) {
    order.order[orderIndex].status = 'Cancelado';
    await order.save();
    return order;
  }

  public async find() {
    return await this.orderModel.find({});
  }

  public async findByOwner(usernameOfTheOwner:string) {
    return await this.orderModel.findOne({ usernameOfTheOwner:usernameOfTheOwner });
  }

  public async deleteAll() {
    return await this.orderModel.deleteMany({});
  }

  public async removeAllOrdersFromAnUsername(order:any) {
    order.order = [];
    await order.save();
  }
}

export default OrderRepository;