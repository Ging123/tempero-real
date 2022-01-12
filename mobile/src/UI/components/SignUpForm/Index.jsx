import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import MainInput from '../MainInput/Index';

const SignUpForm = () => {
  const initialValues = { email:'', username:'', password:'' };

  return (
    <Formik initialValues={ initialValues }>
      {(props) => {
        return (
          <View style={{ padding:10, width:'100%' }}>
            <MainInput
              autoComplete={'email'}
              marginVertical={10}
              onChangeText={props.handleChange('email')}
              placeholder="Email"
              value={props.email}
            />
            <MainInput
              autoComplete={'username'}
              onChangeText={props.handleChange('username')}
              placeholder="Nome de usuário"
              value={props.username}
            />
            <MainInput
              marginVertical={10}
              onChangeText={props.handleChange('password')}
              placeholder="Senha"
              secure={true}
              value={props.password}
            />
          </View>
        );
      }}
    </Formik>
  )
}

export default SignUpForm
