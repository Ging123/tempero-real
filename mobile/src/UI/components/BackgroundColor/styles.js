import { StyleSheet } from "react-native";

function createStyles(background='red') {
  return StyleSheet.create({
    container: {
      backgroundColor:background,
      height:'100%',
      position:'absolute',
      width:'100%'
    }
  });
}

export default createStyles;