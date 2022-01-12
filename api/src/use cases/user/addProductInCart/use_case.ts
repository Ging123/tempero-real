import ProductRepository from "../../../repositories/product.repository";
import UserRepository, { product } from "../../../repositories/user.repository";
import exception from "../../../utils/exception";
import { isInt, isNumber } from "../../../utils/number";

class AddProductInCartUseCase {

  private readonly user = new UserRepository();
  private readonly product = new ProductRepository();

  public async addInCart(user:any, product:product) {
    this.validateProductSent(product);
    await this.verifyIfProductExits(product);
    const userAlreadyHasThisProduct = this.verifyIfCartHasProduct(user, product);
    if(userAlreadyHasThisProduct) {
      return await this.user.updateProductInCart(user, product);
    }
    await this.user.addProductInCart(user, product);
  }

  private validateProductSent(product:product) {
    const productEmpty = 'Campo de produtos não foi preenchido';
    const productNameEmpty = 'Campo de nome não foi preenchido';
    const productQuantityEmpty = 'Campo de quantidade não foi preenchido';
    const quantityOfProductInvalid = 'Quantidade de produtos deve ser no mínimo 1';
    const quantityGreaterThanAllowed = 'Quantidade deve ser no máximo 1000 produtos';
    const quantityIsNotANumber = 'Quantidade não é um número';
    const quantityIsNotAnInt = 'Quantidade deve ser um número inteiro';
    if(!product) throw exception(productEmpty);
    if(!product.name) throw exception(productNameEmpty);
    if(product.quantity === undefined) throw exception(productQuantityEmpty);
    if(product.quantity <= 0) throw exception(quantityOfProductInvalid);
    if(product.quantity > 1000) throw exception(quantityGreaterThanAllowed);
    if(!isNumber(product.quantity)) throw exception(quantityIsNotANumber);
    if(!isInt(product.quantity)) throw exception(quantityIsNotANumber);
  }

  private async verifyIfProductExits(product:product) {
    const productsFound = await this.product.findAll();
    const thisProductDoesntExists = 'Esse produto não existe';
    for(let i = 0; i < productsFound.length; i++) {
      if(product.name === productsFound[i].name) return;
    }
    throw exception(thisProductDoesntExists);
  }

  private verifyIfCartHasProduct(user:any, product:product) {
    for(let i = 0; i < user.cart.length; i++) {
      const cartHasProduct = user.cart[i].product.name === product.name;
      if(cartHasProduct) return true;
    }
    return false;
  }
}

export default AddProductInCartUseCase;