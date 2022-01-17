import './styles.scss';

interface props {
  margin?:string;
  onClick?:() => void;
  type?:'button'|'reset'|'submit';
}

const AddToCartButton = (props:props) => {
  return (
    <button 
      className='add-to-cart-button' 
      onClick={ props.onClick } 
      style={{  margin:props.margin  }}
      type={ props.type }>
      Adicionar ao Carrinho
    </button>
  );
}

export default AddToCartButton;