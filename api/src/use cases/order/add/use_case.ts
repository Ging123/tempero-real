import OrderRepository from "../../../repositories/order.repository";
import { order } from '../../../models/order.model';
import exception from "../../../utils/exception";
import { isInt, isNumber } from "../../../utils/number";
import ProductRepository from "../../../repositories/product.repository";

class OrderAddUseCase {

  private order = new OrderRepository();
  private product = new ProductRepository();

  public async add(username:string, order:order[]) {
    await this.validate(order);
    const oldOrders = await this.order.findByOwner(username);
    if(oldOrders) return await this.order.add(oldOrders, order);
    return await this.order.create(username, order);
  }

  private async validate(order:order[]) {
    const allProducts = await this.product.findAll();
    for(const newOrder of order) {
      this.validateNameOfTheProduct(newOrder.nameOfTheProduct);
      this.validateQuantity(newOrder.quantity);
      this.validateAddress(newOrder.address);
      this.validateStatus(newOrder.status);
      this.verifyIfProductExists(allProducts, newOrder.nameOfTheProduct);
    }
  }

  private validateNameOfTheProduct(nameOfTheProduct:string) {
    const emptyNameOfProduct = 'Nome do produto não foi preenchido';
    const nameOfTheProductTooBig = 'Nome do produto deve ter no máximo 100 caracteries';
    if(!nameOfTheProduct) throw exception(emptyNameOfProduct);
    if(nameOfTheProduct.length > 100) throw exception(nameOfTheProductTooBig);
  }

  private validateQuantity(quantity:number) {
    const emptyQuantity = 'Quantidade de produtos não foi preenchido';
    const quantityTooBig = 'Quantidade deve ser menor que 1000';
    const quantityTooSmall = 'Quantidade de ser no mínimo 1';
    const quantityIsNotANumber = 'Quantidade não é um número';
    const quantityIsNotAnInt = 'Quantidade deve ser um número inteiro';
    if(quantity === undefined) throw exception(emptyQuantity);
    if(quantity > 1000) throw exception(quantityTooBig);
    if(quantity < 1) throw exception(quantityTooSmall);
    if(!isNumber(quantity)) throw exception(quantityIsNotANumber);
    if(!isInt(quantity)) throw exception(quantityIsNotAnInt);
  }

  private validateAddress(address:string) {
    const emptyAddress = 'Endereço não foi enviado';
    const addressTooBig = 'Endereço deve ter no máximo 100 caracteries';
    if(!address) throw exception(emptyAddress);
    if(address.length > 100) throw exception(addressTooBig);
  }

  private validateStatus(status:string) {
    const invalidStatus = 'Status do produto inválido';
    const allValidStatus = ['Em andamento','Comprado','Cancelado'];
    for(const validStatus of allValidStatus) { 
      if(status === validStatus) return;
    }
    throw exception(invalidStatus);
  }

  private verifyIfProductExists(allProducts:any, productToAdd:string) {
    const productDoesntExists = 'Esse produto não existe';
    for(const validProduct of allProducts) {
      if(productToAdd === validProduct.name) return;  
    }
    throw exception(productDoesntExists);
  }
}

export default OrderAddUseCase;