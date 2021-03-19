import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack' 
import UpcomingRepaymentsScreen from '../screens/UpcomingRepayments/UpcomingRepayments.screen'
import PaymentSchedule from '../screens/UpcomingRepayments/PaymentSchedule';
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="UpcomingRepaymentsScreen" headerMode='none'>
        <Stack.Screen name="UpcomingRepaymentsScreen" component={UpcomingRepaymentsScreen} />
        <Stack.Screen name="PaymentSchedule" component={PaymentSchedule} />
      </Stack.Navigator>
    );
  }

  export default index