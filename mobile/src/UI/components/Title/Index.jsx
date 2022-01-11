import { Text } from 'react-native';
import createStyles from './styles';

const Title = (props) => {
  const styles = createStyles(props.color);
  return (
    <Text style={styles.title}>
      {props.content} 
    </Text>
  );
}

export default Title;