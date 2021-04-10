import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile/Profile.screen'
import EditProfile from '../screens/Profile/EditProfile.screen' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Profile" headerMode='none'>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} /> 
      </Stack.Navigator>
    );
  }

  export default index