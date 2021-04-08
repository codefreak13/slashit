import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Transactions from '../../screens/BusinessAccount/Transactions/Transactions.screen' 
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Transactions" headerMode='none'>
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    );
  }

  export default index