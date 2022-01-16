import FirstSpicesInProduct from "../../components/FirstSpicesInProduct/Index";
import RedSpiceProduct from "../../components/RedSpiceProduct/Index";
import UserHeader from "../../components/UserHeader/Index";
import YellowSpiceProduct from "../../components/YellowSpiceProduct/Index";

const Product = () => {
  document.title = 'Produtos';

  return (
    <div>
      <UserHeader/>
      <FirstSpicesInProduct/>
      <YellowSpiceProduct/>
      <RedSpiceProduct/>
    </div>
  );
}

export default Product;