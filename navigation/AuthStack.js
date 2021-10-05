import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignUpScreen from '../screens/SignUpScreen'
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

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
    >
     <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
     <AppStack.Screen
       options={{
         headerShown: false
       }}
     name='Login' component={LoginScreen} />
     <AppStack.Screen
      name='SignUpScreen'
      component={SignUpScreen}
      options={({navigation}) => ({
        title: '',
        headerLeft: () => (
          <View style={{marginLeft: 10}} >
            <FontAwesome.Button
            name='long-arrow-left'
            size={25}
            color='#333'
            backgroundColor="white"
            onPress={() => navigation.navigate('Login')}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'white',
          elevation: 0
        },
        
      })}
     />
    </AppStack.Navigator>
  )
}

export default AuthStack