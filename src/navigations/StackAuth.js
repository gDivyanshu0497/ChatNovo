import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenWelcome from '../screens/BeforeAuthentication/ScreenWelcome';
import ScreenLogin from '../screens/BeforeAuthentication/ScreenLogin';

const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
      <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
    </Stack.Navigator>
  );
}
