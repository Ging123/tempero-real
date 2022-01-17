import { useEffect, useRef, useState } from 'react';
import color from '../../color';
import Modal from '../Modal/Index';
import Text from '../Text/Index';
import createProduct from './createProduct';
import showBar from './showBar';
import './styles.scss';

interface props {
  close:() => void;
}

const CartAndOrderBar = (props:props) => {  
  const barRef = useRef<any>(null);
  const [product, setProduct] = useState([{name:'tempero vermelho', quantity:10, price:10}]);
  const hideScrollBar = () => document.body.style.overflowY = 'hidden';
  const showScrollBar = () => document.body.style.overflowY = 'scroll';

  useEffect(() => {
    hideScrollBar();
    showBar(barRef);
    return () => {
      showScrollBar();
    }
  }, []);

  return (
    <>
      <Modal background={ color.blackForModal } onClick={ props.close }/>
      <div className="cart-and-order-bar hidden" ref={barRef}>
        <Text 
          className="cart-title" 
          color="black" 
          content="Carrinho"
        />
        { product.map((data, index) => createProduct(data, index)) }
      </div>
    </>
  );
}

export default CartAndOrderBar;