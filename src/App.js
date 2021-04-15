import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import MainNavigation from './navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'
import { store } from './stores'
import { enableScreens } from 'react-native-screens'
import {ColorContext} from './context/colorContext'; 
enableScreens()

const App = () => {
  const [isDark, setIsDark] = useState(false);
  // const setDarkMode = async () => await AsyncStorage.setItem('isDark', JSON.stringify(isDark))
  const setDarkMode = async () => await AsyncStorage.getItem('isDark')
  console.log(setDarkMode())
  // useEffect(()=>{console.log(isDark,'isDark?')},[isDark])
  // useEffect(()=>{
  //   setDarkMode()
  // },[isDark])
  return (
    <>
      <Provider store={store}>
        <ColorContext.Provider value={{
          isDark: isDark ? true : false,
          shuffle: () => {
            const t = setIsDark(!isDark)
            console.log(setIsDark(!isDark),'ttt')
          }
        }}>
        <MainNavigation />
        </ColorContext.Provider>
      </Provider>
    </>
  )
}

export default App
