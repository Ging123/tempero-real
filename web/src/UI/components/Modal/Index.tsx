import './styles.scss';

interface props {
  background?:string;
  onClick?:() => void;
}

const Modal = (props:props) => {
  const styles = { background:props.background }
  return <div className='modal' onClick={ props.onClick } style={styles} />
}

export default Modal;