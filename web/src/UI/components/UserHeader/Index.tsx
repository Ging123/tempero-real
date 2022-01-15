import { FaDoorOpen, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const UserHeader = () => {
  return (
    <header className="user-header">
      <FaShoppingCart title="Carrinho e Pedidos"/>
      <FaDoorOpen title="Sair"/>
    </header>
  )
}

export default UserHeader;