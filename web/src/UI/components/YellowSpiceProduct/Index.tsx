import BackgroundImage from '../BackgroundImage/Index';
import spice from '../../assets/yellow_spice_for_products.jpg';
import color from '../../color';

const YellowSpiceProduct = () => {
  return (
    <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
      
    </BackgroundImage>
  );
}

export default YellowSpiceProduct;