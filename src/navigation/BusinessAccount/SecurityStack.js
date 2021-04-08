import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack' 
import Security from '../../screens/BusinessAccount/Security/Security.screen'
import TransactionPin from '../../screens/BusinessAccount/Security/TransactionPin.screen'
import UseFingerprint from '../../screens/BusinessAccount/Security/UseFingerprint.screen'
import ProvideFingerPrint from '../../screens/BusinessAccount/Security/ProvideFingerPrint';
const Stack = createStackNavigator()

const SecurityStack = () => {
    return (
      <Stack.Navigator initialRouteName="Security" headerMode='none'>
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="ProvideFingerPrint" component={ProvideFingerPrint} />
        <Stack.Screen name="TransactionPin" component={TransactionPin} />
        <Stack.Screen name="UseFingerprint" component={UseFingerprint} />
        
      </Stack.Navigator>
    );
  }

  export default SecurityStack