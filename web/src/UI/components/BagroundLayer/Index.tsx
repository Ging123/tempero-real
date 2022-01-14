import './styles.scss';

interface props {
  backgroundColor?:string;
}

const BackgroundLayer = (props:props) => {
  const style = { backgroundColor:props.backgroundColor }; 
  return <div className="background-layer" style={style} />
}

export default BackgroundLayer;