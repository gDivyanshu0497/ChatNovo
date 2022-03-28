import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/Authentication/WelcomeScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
