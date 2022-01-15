import BackgroundImage from "../../components/BackgroundImage/Index";
import spice from "../../assets/spice_for_login.jpg";
import color from "../../color";
import Text from "../../components/Text/Index";
import LoginForm from "../../components/LoginForm/Index";
import SignUpMessage from "../../components/SignUpMessage/Index";

const Login = () => {
  document.title = 'Entrar';

  return (
    <BackgroundImage layerColor={ color.blackForLayer } position="fixed" url={ spice }>
      <Text content="Entrar" type="title"/>
      <Text
        content="Entre e veja os melhores temperos de Feira de Santana"
        type="sub-title"
        margin="15px 0px 35px 0px"
      />
      <LoginForm/>
      <SignUpMessage/>
    </BackgroundImage>
  )
}

export default Login;