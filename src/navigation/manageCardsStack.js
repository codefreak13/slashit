import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import ManageCards from '../screens/ManageCards/ManageCards.screen'
import BillingAddress from '../screens/ManageCards/BillingAddress'
const Stack = createStackNavigator()

const SecurityStack = () => {
    return (
      <Stack.Navigator initialRouteName="ManageCards" headerMode='none'>
        <Stack.Screen name="ManageCards" component={ManageCards} />
        <Stack.Screen name="BillingAddress" component={BillingAddress} /> 
      </Stack.Navigator>
    );
  }

  export default SecurityStack