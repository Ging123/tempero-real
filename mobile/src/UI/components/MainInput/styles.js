import { StyleSheet } from "react-native";

function createStyles(marginVertical=0) {
  return StyleSheet.create({
    input: {
      borderColor:'red',
      backgroundColor:'white',
      borderRadius:10,
      color:'black',
      marginVertical:marginVertical,
      paddingLeft:10,
      paddingRight:10,
      paddingVertical:5,
      width:'100%'
    }
  });
}

export default createStyles;