import UserRepository, { product } from "../../../repositories/user.repository";
import exception from "../../../utils/exception";
import ProductGetUseCase from "../../product/get/product.get.use.case";

class AddProductInCartUseCase {

  private readonly user = new UserRepository();
  private readonly product = new ProductGetUseCase();

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
    if(!product) throw exception(productEmpty);
    if(!product.name) throw exception(productNameEmpty);
    if(product.quantity === undefined) throw exception(productQuantityEmpty);
    if(product.quantity <= 0) throw exception(quantityOfProductInvalid);
    if(product.quantity > 1000) throw exception(quantityGreaterThanAllowed);
  }

  private async verifyIfProductExits(product:product) {
    const productsFound = await this.product.get();
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