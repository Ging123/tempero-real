import { Text, TouchableOpacity } from "react-native";
import createStyles from "./styles";

const SubmitButton = (props) => {
  const styles = createStyles(props.marginVertical);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <Text style={styles.button}>
        {props.content}
      </Text>
    </TouchableOpacity>
  );
}

export default SubmitButton;