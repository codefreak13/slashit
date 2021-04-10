import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import TransferToBank from '../../screens/BusinessAccount/TransferToBank' 
// import EnterPin from '../../screens/BusinessAccount/TransferToBank/enterPin'
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="TransferToBank" headerMode='none'>
        <Stack.Screen name="TransferToBank" component={TransferToBank} />
        {/* <Stack.Screen name="EnterPin" component={EnterPin} /> */}
      </Stack.Navigator>
    );
  }

  export default index