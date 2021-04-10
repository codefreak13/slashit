import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Transactions from '../../screens/Transactions/Transactions.screen' 
import TransactionDetails from '../../screens/Transactions/TransactionDetails';
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Transactions" headerMode='none'>
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} /> 
      </Stack.Navigator>
    );
  }

  export default index