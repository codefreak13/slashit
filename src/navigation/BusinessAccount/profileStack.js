import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../screens/BusinessAccount/Profile' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Profile" headerMode='none'>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  }

  export default index