import { Text } from 'react-native';
import createStyles from './styles';

const SubTitle = (props) => {
  const styles = createStyles(props.color);

  return (
    <Text style={styles.subTitle}>
      {props.content}
    </Text>
  );
}

export default SubTitle;