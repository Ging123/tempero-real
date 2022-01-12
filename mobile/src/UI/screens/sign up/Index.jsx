import BackgroundWithImage from '../../components/BackgroundWithImage/Index';
import spyce from '../../assets/spice_to_sign_up.jpg';
import BackgroundColor from '../../components/BackgroundColor/Index';
import color from '../../../color';
import Title from '../../components/Title/Index';
import SubTitle from '../../components/SubTitle/Index';
import SignUpForm from '../../components/SignUpForm/Index';

const SignUpScreen = () => {
  return (
    <BackgroundWithImage src={spyce} onPress={() => Keyboard.dismiss()}>
      <BackgroundColor background={color.blackForModal}/>
      <Title content='Cadastre-se'/>
      <SubTitle content='Cadastre-se para você poder entrar'/>
      <SignUpForm/>
    </BackgroundWithImage>
  );
}

export default SignUpScreen;