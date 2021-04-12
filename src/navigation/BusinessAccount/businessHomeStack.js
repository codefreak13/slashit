import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import BusinessHomeScreen from '../../screens/BusinessAccount/Home' 
import AddMoney from '../../screens/BusinessAccount/Home/addMoney'
import CreateOrder from '../../screens/BusinessAccount/Home/createOrder'
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="BusinessHomeScreen" headerMode='none'>
        <Stack.Screen name="BusinessHomeScreen" component={BusinessHomeScreen} />
        <Stack.Screen name="AddMoney" component={AddMoney} />
        <Stack.Screen name="CreateOrder" component={CreateOrder} />
      </Stack.Navigator>
    );
  }

  export default index