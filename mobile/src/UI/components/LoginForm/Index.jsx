import { View } from "react-native";
import MainInput from "../MainInput/Index";
import { Formik } from 'formik';
import SubmitButton from "../SubmitButton/Index";

const LoginForm = () => {
  const initialValues = {  emailOrUsername:'', password:'' };

  return (
    <Formik initialValues={initialValues}>
      {(props) => {
        return (
          <View style={{ padding:10, width:'100%' }}>
            <MainInput
              marginVertical={10}
              onChangeText={props.handleChange('emailOrUsername')}
              placeholder="Email ou nome de usuário"
              value={props.emailOrUsername}
            />
            <MainInput
              onChangeText={props.handleChange('password')}
              placeholder="Senha"
              secure={true}
              value={props.email}
            />
            <SubmitButton 
              content='Entrar'
              marginVertical={10}
            />
          </View>
        );
      }}
    </Formik>
  );
}

export default LoginForm;