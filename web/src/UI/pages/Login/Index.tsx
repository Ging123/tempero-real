import BackgroundImage from "../../components/BackgroundImage/Index";
import spice from "../../assets/spice_to_login.jpg";
import color from "../../color";
import Text from "../../components/Text/Index";
import LoginForm from "../../components/LoginForm/Index";
import SignUpMessage from "../../components/SignUpMessage/Index";

const Login = () => {
  return (
    <BackgroundImage layerColor={ color.blackForLayer } url={ spice }>
      <Text content="Entrar" type="title"/>
      <Text
        content="Digite seus dados para entrar na melhor loja de tempero de feira :)"
        type="sub-title"
        margin="15px 0px 35px 0px"
      />
      <LoginForm/>
      <SignUpMessage/>
    </BackgroundImage>
  )
}

export default Login;