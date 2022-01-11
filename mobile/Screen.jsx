import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/UI/screens/login/Index';
import SignUpScreen from './src/UI/screens/sign up/Index';

const Stack = createNativeStackNavigator();

const Screen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={SignUpScreen}
        name="sign up"  
      />
      <Stack.Screen 
        component={LoginScreen}
        name="login"
      />
    </Stack.Navigator>
  );
}

export default Screen;