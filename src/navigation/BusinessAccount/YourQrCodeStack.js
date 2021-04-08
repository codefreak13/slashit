import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import YourQrCode from '../../screens/BusinessAccount/YourQrCode' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="YourQrCode" headerMode='none'>
        <Stack.Screen name="YourQrCode" component={YourQrCode} />
      </Stack.Navigator>
    );
  }

  export default index