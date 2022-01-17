import { useState } from "react";
import CartAndOrderBar from "../../components/CartAndOrderBar/Index";
import FirstSpicesInProduct from "../../components/FirstSpicesInProduct/Index";
import RedSpiceProduct from "../../components/RedSpiceProduct/Index";
import UserHeader from "../../components/UserHeader/Index";
import YellowSpiceProduct from "../../components/YellowSpiceProduct/Index";

const Product = () => {
  document.title = 'Produtos';
  const [cartAndOrderBarVisible, setCartAndOrderBarVisibility] = useState(false);

  return (
    <>
      <UserHeader onClickCart={() => setCartAndOrderBarVisibility(true)}/>
      <FirstSpicesInProduct/>
      <YellowSpiceProduct/>
      <RedSpiceProduct/>
      { cartAndOrderBarVisible && 
      <CartAndOrderBar close={() => setCartAndOrderBarVisibility(false)}/> 
      }
    </>
  );
}

export default Product;