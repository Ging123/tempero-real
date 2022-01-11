import { StyleSheet } from "react-native";

function createStyles(color='white') {
  return StyleSheet.create({
    title: {
      color:color,
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      textTransform:'capitalize'
    }
  });
}

export default createStyles;