import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LoginScreen = () => {
 return (
  <View style={styles.container}>
   <Text>Login Screen</Text>
   <Button
    title='Click Me'
    onPress={() => alert('Button is pressed')}
   />
  </View>
 )
}

export default LoginScreen

let styles = StyleSheet.create({
 container: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
 }
})
