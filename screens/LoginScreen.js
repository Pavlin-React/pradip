import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AntDesign name="user" size={25} color="#666" />
      <Text>Login Screen</Text>
      <Button
        title="Click"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </View>
  );
};

export default LoginScreen;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
