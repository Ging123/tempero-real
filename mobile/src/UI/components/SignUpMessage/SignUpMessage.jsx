import { Text } from "react-native";
import styles from "./styles";

const SignUpMessage = () => {
  return (
    <Text style={styles.signUpText}>
      Não tem uma conta ? Crie uma <Text style={styles.boldText}>aqui</Text>
    </Text>
  )
}

export default SignUpMessage;