import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
 return (
  <Onboarding
   pages={[
     {
       backgroundColor: '#fff',
       image: <Image source={require('./images/circle.png')} />,
       title: 'Onboarding',
       subtitle: 'Done with React Native Onboarding Swiper',
     },
     {
       backgroundColor: '#fff',
       image: <Image source={require('./images/circle.png')} />,
       title: 'Onboarding',
       subtitle: 'Done with React Native Onboarding Swiper',
     },
     {
       backgroundColor: '#fff',
       image: <Image source={require('./images/circle.png')} />,
       title: 'Onboarding',
       subtitle: 'Done with React Native Onboarding Swiper',
     },
   ]}
 />
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
