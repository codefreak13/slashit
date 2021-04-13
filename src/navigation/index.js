import React, {
  useMemo,
  useEffect,
  useReducer,
  useState,
  useContext
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, useColorScheme } from 'react-native'
import { AuthContext } from '../context/authContext'
import { ColorContext } from '../context/colorContext'
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native'
import AuthStackScreens from './authStack'
import ShopperStackScreens from './appDrawerStack'
import BusinessStackScreens from './BusinessAccount/businessDrawerStack'
import { ActivityIndicator } from 'react-native'

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#BE61CE',
    text: '#DAE1E7',
    icons: '#DAE1E7',
    appBackground: '#000',
    customCard: '#99999932',
    listCard: '#555',
    border: '#f3f3f3',
    placeHolderTextColor: '#999',
    aux: '#303030'
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BE61CE',
    text: '#000',
    icons: '#444',
    appBackground: '#BE61CE',
    customCard: '#DAE1E7',
    listCard: '#fff',
    border: '#444',
    placeHolderTextColor: '#999',
    aux: '#fff'
  }
}
const AppRoute = () => {
  const { isDark, shuffle } = useContext(ColorContext)
  const scheme = useColorScheme()

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
    userToken: null,
    accountType: null
  }
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          accountType: action.accountType
        }
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
          accountType: action.accountType
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
      signIn: async (token, email, accountType) => {
        try {
          await AsyncStorage.setItem('token', token)
          await AsyncStorage.setItem('email', email)
          await AsyncStorage.setItem('accountType', accountType)
          dispatch({ type: 'LOGIN', email, token, accountType })
        } catch (e) {
          console.log(e, 'Error')
        }
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
    let accountType = null
    try {
      userToken = await AsyncStorage.getItem('token')
      accountType = await AsyncStorage.getItem('accountType')
    } catch (e) {
      console.log('Error')
    }
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken, accountType })
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
      <NavigationContainer
        theme={
          // scheme !== 'dark' || isDark ? customDarkTheme : customDefaultTheme
          isDark ? customDarkTheme : customDefaultTheme
        }>
        {loginState.userToken !== null ? (
          loginState.accountType === 'BusinessAccount' ? (
            <BusinessStackScreens />
          ) : (
            <ShopperStackScreens />
          )
        ) : (
          <AuthStackScreens />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default AppRoute
