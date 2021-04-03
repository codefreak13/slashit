import React, { useState } from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Signin from '../screens/Auth/Signin'
import BusinessAccountSignin from '../screens/Auth/Signin/BusinessAccountSignin'
import Signup from '../screens/Auth/Signup' 
import ResetPassword from '../screens/Auth/ResetPassword' 
import VerifyPhone from '../screens/Auth/VerifyPhone' 
import VerifyEmail from '../screens/Auth/VerifyEmail' 
import SetNewPassword from '../screens/Auth/SetNewPassword' 
import BusinessAccountSignup from '../screens/Auth/Signup/BusinessAccountSignup'
const Stack = createStackNavigator()

const index = () => {
    return (
      <Stack.Navigator initialRouteName="Signin" headerMode='none'>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="BusinessAccountSignin" component={BusinessAccountSignin} />
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} /> 
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} /> 
        <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
        <Stack.Screen name="BusinessAccountSignup" component={BusinessAccountSignup} />  
      </Stack.Navigator>
    );
  }

  export default index