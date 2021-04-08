import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import TransferToBank from '../../screens/BusinessAccount/TransferToBank' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="TransferToBank" headerMode='none'>
        <Stack.Screen name="TransferToBank" component={TransferToBank} />
      </Stack.Navigator>
    );
  }

  export default index