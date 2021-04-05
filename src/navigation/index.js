import React, { useMemo, useEffect, useReducer, useState, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { View, useColorScheme } from 'react-native'
import { AuthContext } from '../context/authContext'
import {ColorContext} from '../context/colorContext'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import AuthStackScreens from './authStack'
import AppStackScreens from './appDrawerStack'
import { ActivityIndicator } from 'react-native' 

 

 
const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#BE61CE',
    text: '#DAE1E7',
    icons: '#DAE1E7',
    appBackground: '#000',
    customCard: '#999',
    listCard: '#555',
    border: '#f3f3f3',
    placeHolderTextColor: '#999'
  }
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BE61CE',
    text: '#444',
    icons: '#444',
    appBackground: '#BE61CE',
    customCard: '#DAE1E7',
    listCard: '#fff',
    border: '#444',
    placeHolderTextColor: '#999'
  }
};
const AppRoute = () => {
  const {isDark, shuffle} = useContext(ColorContext)
  const scheme = useColorScheme();

  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('token')
    } catch (e) {
      console.log('There was an error')
    }
  }
  const initialLoginState = {
    isLoading: true,
    userEmail: null, 
    userToken: null
  }
  console.log(isDark)
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)
  const authContext = useMemo(
    () => ({
      signIn: async (token, email) => {
        try {
          await AsyncStorage.setItem('token', token)
          await AsyncStorage.setItem('email', email)
        } catch (e) {
          console.log(e, 'Error')
        }
        dispatch({ type: 'LOGIN', email, token })
      },
      signOut: async () => {
        await handleSignOut()
        dispatch({ type: 'LOGOUT' })
      }
    }),
    []
  )
  const getToken = async () => {
    let userToken = null
    try {
      userToken = await AsyncStorage.getItem('token')
    } catch (e) {
      console.log('Error')
    }
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
  }
  useEffect(() => {
    getToken()
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={scheme === 'dark' || isDark ? customDarkTheme : customDefaultTheme}>
        {loginState.userToken !== null ? (
          <AppStackScreens />
        ) : (
          <AuthStackScreens />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default AppRoute
