import FirstSpicesInProduct from "../../components/FirstSpicesInProduct/Index";
import UserHeader from "../../components/UserHeader/Index";
import YellowSpiceProduct from "../../components/YellowSpiceProduct/Index";

const Product = () => {
  document.title = 'Produtos';

  return (
    <div>
      <UserHeader/>
      <FirstSpicesInProduct/>
      <YellowSpiceProduct/>
    </div>
  );
}

export default Product;