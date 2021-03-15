import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Security from '../screens/Security/Security.screen'
import TransactionPin from '../screens/Security/TransactionPin.screen'
import UseFingerprint from '../screens/Security/UseFingerprint.screen'

const Stack = createStackNavigator()

const SecurityStack = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SecurityHome" component={Security} />
        <Stack.Screen name="TransactionPin" component={TransactionPin} />
        <Stack.Screen name="UseFingerprint" component={UseFingerprint} />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    );
  }

  export default SecurityStack