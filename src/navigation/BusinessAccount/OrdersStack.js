import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Orders from '../../screens/BusinessAccount/Orders' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Orders" headerMode='none'>
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    );
  }

  export default index