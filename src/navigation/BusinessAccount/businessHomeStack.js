import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import BusinessHomeScreen from '../../screens/BusinessAccount/Home' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="BusinessHomeScreen" headerMode='none'>
        <Stack.Screen name="BusinessHomeScreen" component={BusinessHomeScreen} />
      </Stack.Navigator>
    );
  }

  export default index