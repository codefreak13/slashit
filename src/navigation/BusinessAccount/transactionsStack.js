import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Transactions from '../../screens/BusinessAccount/Transactions/Transactions.screen' 
import Refund from '../../screens/BusinessAccount/Transactions/Refund';
import TransactionDetails from '../../screens/BusinessAccount/Transactions/TransactionDetails';
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Transactions" headerMode='none'>
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} /> 
        <Stack.Screen name="Refund" component={Refund} /> 
      </Stack.Navigator>
    );
  }

  export default index