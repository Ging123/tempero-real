import UserRepository from "../../../repositories/user.repository";
import exception from "../../../utils/exception";

class UserRemoveProductOfTheCartUseCase {

  private readonly user = new UserRepository();

  public async remove(user:any, productName:string) {
    const cartDoenstHasThisProduct = 'Você não possui esse produto no carrinho';
    const productRemoved = await this.removeProductOfTheCart(user, productName);
    if(productRemoved) return;
    throw exception(cartDoenstHasThisProduct);
  }

  private async removeProductOfTheCart(user:any, productName:string) {
    for(let i = 0; i < user.cart.length; i++) {
      const productExistInCart = user.cart[i].product.name === productName;
      if(productExistInCart) {
        await this.user.removeProductOfTheCart(user, i);
        return true;
      }
    }
  }
}

export default UserRemoveProductOfTheCartUseCase;