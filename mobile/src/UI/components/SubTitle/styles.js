import { StyleSheet } from "react-native";

function createStyles(color='white') {
  return StyleSheet.create({
    subTitle: {
      color:color,
      fontSize:16,
      textAlign:"center"
    }
  });
}

export default createStyles;