import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack' 
import TransactionsScreen from '../screens/Transactions/Transactions.screen'
import TransactionDetails from '../screens/Transactions/TransactionDetails';
import RepaymentDetails from '../screens/UpcomingRepayments/RepaymentDetails';
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="TransactionsScreen" headerMode='none'>
        <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} /> 
        <Stack.Screen name="RepaymentDetails" component={RepaymentDetails} />
      </Stack.Navigator>
    );
  }

  export default index