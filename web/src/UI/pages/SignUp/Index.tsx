import spice from '../../assets/spice_to_sign_up.jpg';
import color from '../../color'
import BackgroundImage from '../../components/BackgroundImage/Index'
import LoginMessage from '../../components/LoginMessage/Index';
import SignUpForm from '../../components/SignUpForm/Index';
import Text from '../../components/Text/Index';

const SignUp = () => {
  document.title = 'Cadastrar';

  return (
    <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
      <Text content="Cadastre-se" type="title" />
      <Text
        content="Digite seus dados para se cadastrar"
        type="sub-title"
        margin="15px 0px 35px 0px"
      />
      <SignUpForm/>
      <LoginMessage/>
    </BackgroundImage>
  )
}

export default SignUp
