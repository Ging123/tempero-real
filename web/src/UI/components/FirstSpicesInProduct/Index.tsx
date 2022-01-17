import spice from '../../assets/spice_for_home.jpg';
import color from '../../color';
import BackgroundImage from '../BackgroundImage/Index';
import { FaChevronDown } from 'react-icons/fa';
import Text from '../Text/Index';
import './styles.scss';
import { useEffect } from 'react';
import hideScrollImageOnScroll from './hideScrollImageOnScroll';

const FirstSpicesInProduct = () => {
  useEffect(() => {
    window.addEventListener('scroll', hideScrollImageOnScroll);
    return () => window.removeEventListener('scroll', hideScrollImageOnScroll);
  }, []);

  return (
    <>
      <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
        <Text 
          content="Tempero Real" 
          type="title"
        />
        <Text 
          content="Os Melhores Temperos de Feira de Santana e Região" 
          type="sub-title"
          margin="30px 0px 50px 0px"
        />
      </BackgroundImage>
      <Text className="scroll-down-message" type='small'>
        <Text
          content="Deslize para baixo para ver nossos produtos" 
          margin='0px 0px 10px 0px' 
          type='small' 
        />
        <FaChevronDown/>
      </Text>
  </>
  );
}

export default FirstSpicesInProduct;