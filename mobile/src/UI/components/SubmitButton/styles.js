import { StyleSheet } from "react-native";
import color from "../../../color";

function createStyles(marginVertical=0) {
  return StyleSheet.create({
    button: {
      backgroundColor:color.mainGreen,
      borderRadius:20,
      fontWeight:'600',
      marginVertical:marginVertical,
      paddingVertical:7,
      textAlign:'center'
    }
  });
}

export default createStyles;