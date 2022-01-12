import OrderRepository from "../../../repositories/order.repository";
import exception from "../../../utils/exception";

class OrderCancelUseCase {
  
  private order = new OrderRepository();

  public async cancel(username:string, orderIndex:number) {
    const order = await this.getOrder(username);
    this.verifyIfOrderExists(order, orderIndex);
    return await this.order.cancel(order, orderIndex);
  }

  private async getOrder(username:string) {
    const userDoesntHaveAnOrder = 'Você não tem nenhum pedido registrado ainda';
    const order = await this.order.findByOwner(username);
    if(!order) throw exception(userDoesntHaveAnOrder);
    if(order.order.length < 1) throw exception(userDoesntHaveAnOrder);
    return order;
  }

  private verifyIfOrderExists(order:any, orderIndex:number) {
    const orderDoesntExists = 'Esse pedido não existe';
    if(order.order[orderIndex] === undefined) throw exception(orderDoesntExists);
  }
}

export default OrderCancelUseCase;