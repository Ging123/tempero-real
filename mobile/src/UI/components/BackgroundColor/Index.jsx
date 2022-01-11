import { View } from 'react-native';
import createStyles from './styles';

const BackgroundColor = (props) => {
  const styles = createStyles(props.background);
  return <View style={styles.container}/>
}

export default BackgroundColor;