import React from 'react'
import { StyleSheet, Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
 return (
  <Onboarding
   let onSkip = {() => navigation.replace('Login')}
   let onDone = {() => navigation.navigate('Login')}
   pages={[
     { 
       backgroundColor: '#fff',
       image: <Image source={require('../assets/img-1.png')} />,
       title: 'Connect to the world',
       subtitle: 'The new way to connect to the world',
     },
     {
       backgroundColor: '#fff',
       image: <Image source={require('../assets/img-2.png')} />,
       title: 'Share your Favorites',
       subtitle: 'Share your things with similar people from the world',
     },
     {
       backgroundColor: '#fff',
       image: <Image source={require('../assets/img-3.png')} />,
       title: 'Become a star',
       subtitle: 'Let the spot light capture you ',
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
