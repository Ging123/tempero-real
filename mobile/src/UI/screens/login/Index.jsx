import spice from '../../assets/spice.jpg';
import BackgroundWithImage from '../../components/BackgroundWithImage/Index';
import BackgroundColor from '../../components/BackgroundColor/Index';
import Title from '../../components/Title/Index';
import SubTitle from '../../components/SubTitle/Index';
import LoginForm from '../../components/LoginForm/Index';
import SignUpMessage from '../../components/SignUpMessage/SignUpMessage';
import color from '../../../color';

const LoginScreen = () => {
  return (
    <BackgroundWithImage src={spice} onPress={() => Keyboard.dismiss()}>
      <BackgroundColor background={color.blackForModal}/>
      <Title content="Entrar"/>
      <SubTitle content='Os melhores temperos de Feira de Santana'/>
      <LoginForm/>
      <SignUpMessage/>
    </BackgroundWithImage>
  );
}

export default LoginScreen;