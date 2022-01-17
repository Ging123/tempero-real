import BackgroundImage from '../BackgroundImage/Index';
import spice from '../../assets/yellow_spice_for_products.jpg';
import color from '../../color';
import Text from '../Text/Index';
import AddToCartButton from '../AddToCartButton/Index';

const YellowSpiceProduct = () => {
  return (
    <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
      <Text 
        content="Tempero Amarelo" 
        type="title"
      />
      <Text 
        content="Tempero Especial Para Galinhas, Peixes e Muito Mais" 
        type="sub-title"
        margin="30px 0px 50px 0px"
      />
      <AddToCartButton/>
    </BackgroundImage>
  );
}

export default YellowSpiceProduct;