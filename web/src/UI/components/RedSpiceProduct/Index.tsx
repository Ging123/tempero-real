import spice from '../../assets/red_spice_for_products.jpg';
import color from '../../color';
import AddToCartButton from '../AddToCartButton/Index';
import BackgroundImage from '../BackgroundImage/Index';
import Text from '../Text/Index';

const RedSpiceProduct = () => {
  return (
    <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
      <Text 
          content="Tempero Vermelho" 
          type="title"
        />
        <Text 
          content="Tempero Especial Para Carnes Vermelhas" 
          type="sub-title"
          margin="30px 0px 50px 0px"
        />
        <AddToCartButton/>
    </BackgroundImage>
  )
}

export default RedSpiceProduct;