import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Orders from '../../screens/BusinessAccount/Orders' 
import OrderDetails from '../../screens/BusinessAccount/Orders/OrderDetails' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Orders" headerMode='none'>
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    );
  }

  export default index