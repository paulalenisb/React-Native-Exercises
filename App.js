import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import catImage from './assets/cute-cat.png';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catland!!</Text>
      <Image 
        source={catImage}
        style={styles.image}
      />
      <Button
        color='green'
        title='Feedme'
        onPress={() => Alert.alert('hellooo')}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'aquamarine' 
  },
  title: { fontSize: 30 },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100},
});

export default App;