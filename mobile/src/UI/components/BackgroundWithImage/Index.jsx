import { ImageBackground } from "react-native";
import styles from "./styles";

const BackgroundWithImage = (props) => {
  return (
    <ImageBackground 
      source={props.src} resizeMode={'stretch'} style={styles.backgroundImage}>
      {props.children}
    </ImageBackground>
  );
}

export default BackgroundWithImage