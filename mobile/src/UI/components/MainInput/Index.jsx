import { TextInput } from "react-native";
import createStyles from './styles';

const MainInput = (props) => {
  const styles = createStyles(props.marginVertical);

  return (
    <TextInput
      autoComplete={props.autoComplete}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      secureTextEntry={props.secure}
      style={styles.input}
      value={props.value}
    />
  );
}

export default MainInput;