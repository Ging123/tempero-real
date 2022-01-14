import BackgroundLayer from '../BagroundLayer/Index';
import './styles.scss';

interface props<T = any> {
  children:T;
  layerColor?:string;
  url:string;
}

const BackgroundImage = (props:props) => {
  const styles = {
    backgroundImage:`url("${props.url}")`
  }

  return (
    <>
      <div className='background-image-container' style={styles}>
        <div>{ props.children }</div>
        <BackgroundLayer backgroundColor={props.layerColor}/>
      </div>
    </>
  );
}

export default BackgroundImage;