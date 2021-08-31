import 'react-native-gesture-handler';
import React from 'react'
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();

const App = () => {
 return (
  <NavigationContainer>
   <AppStack.Navigator
    screenOptions = {{
     headerShown: false
    }}
   >
    <AppStack.Screen name='Onboarding' component={OnboardingScreen} />
    <AppStack.Screen name='Login' component={LoginScreen} />
   </AppStack.Navigator>
  </NavigationContainer>
 )
}

export default App
