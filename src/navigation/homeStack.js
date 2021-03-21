import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home/Home.screen'
import Notifications from '../screens/Notifications'
const Stack = createStackNavigator()

const SecurityStack = () => {
    return (
      <Stack.Navigator initialRouteName="HomeScreen" headerMode='none'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={Notifications} /> 
      </Stack.Navigator>
    );
  }

  export default SecurityStack