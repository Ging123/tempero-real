import './styles.scss';

interface props {
  content?:string;
  margin?:string;
  onClick?:() => void;
  type?:'button'|'reset'|'submit';
}

const DefaultButton = (props:props) => {
  return (
    <button 
      className='default-button' 
      onClick={ props.onClick } 
      style={{  margin:props.margin  }}
      type={ props.type }>
      { props.content }
    </button>
  )
}

export default DefaultButton;