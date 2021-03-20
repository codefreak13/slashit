import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack' 
import UpcomingRepaymentsScreen from '../screens/UpcomingRepayments/UpcomingRepayments.screen'
import PaymentSchedule from '../screens/UpcomingRepayments/PaymentSchedule';
import RepaymentDetails from '../screens/UpcomingRepayments/RepaymentDetails';
import TransactionDetails from '../screens/Transactions/TransactionDetails';
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="UpcomingRepaymentsScreen" headerMode='none'>
        <Stack.Screen name="UpcomingRepaymentsScreen" component={UpcomingRepaymentsScreen} />
        <Stack.Screen name="PaymentSchedule" component={PaymentSchedule} />
        <Stack.Screen name="RepaymentDetails" component={RepaymentDetails} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} /> 
      </Stack.Navigator>
    );
  }

  export default index