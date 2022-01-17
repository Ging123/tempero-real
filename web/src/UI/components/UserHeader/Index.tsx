import { FaDoorOpen, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

interface props {
  onClickCart?:() => void;
  onClickExit?:() => void;
}

const UserHeader = (props:props) => {
  return (
    <header className="user-header">
      <FaShoppingCart 
        onClick={props.onClickCart}
        title="Carrinho e Pedidos" 
      />
      <FaDoorOpen 
        onClick={props.onClickExit}
        title="Sair"
      />
    </header>
  )
}

export default UserHeader;