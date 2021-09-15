import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen'
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorage from '@react-native-community/async-storage'

const AppStack = createStackNavigator();

const AuthStack = () => {

 let [isFirstLaunch, setIsFirstLaunch] = useState(null)

 let routeName

  useEffect(() => {
   AsyncStorage.getItem('alreadyLaunched').then(value => {
    if(value == null) {
     AsyncStorage.setItem('alreadyLaunched', 'true')
     setIsFirstLaunch(true)
    } else {
     setIsFirstLaunch(false)
    }
   })

  }, [])

  if (isFirstLaunch == null) {
   return null
  } else if (isFirstLaunch == true) {
   routeName = 'Onboarding'
  } else {
    routeName = 'Login'
  }

  return (
    <AppStack.Navigator
     initialRouteName={routeName}
     screenOptions = {{
      headerShown: false
     }}
    >
     <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
     <AppStack.Screen name='Login' component={LoginScreen} />
     <AppStack.Screen name='SignUpScreen' component={SignUpScreen} />
    </AppStack.Navigator>
  )
}

export default AuthStack