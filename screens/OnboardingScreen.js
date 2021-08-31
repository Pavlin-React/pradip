import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const OnboardingScreen = ({navigation}) => {
 return (
  <View style={styles.container}> 
   <Text>Onboarding Screen</Text>
   <Button
    title='Click Here'
    onPress={() => navigation.navigate('Login')}
   />
  </View>
 )
}

export default OnboardingScreen

let styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 }
})
