import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        console.log('ok')
        Alert.alert('test', 'Isso é apenas um test', [{
          text:'Ok',
          onPress:() => console.log('fechado')
        }])
      }}>
        <Text>lq</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
