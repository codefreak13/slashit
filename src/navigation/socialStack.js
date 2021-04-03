import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import InstagramPage from '../screens/Social/instagramPage'
import Social from '../screens/Social' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Social" headerMode='none'>
        <Stack.Screen name="Social" component={Social} />
        <Stack.Screen name="InstagramPage" component={InstagramPage} /> 
      </Stack.Navigator>
    );
  }

  export default index