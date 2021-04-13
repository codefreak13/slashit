import 'react-native-gesture-handler'
import React, {useState} from 'react'
import MainNavigation from './navigation'
import { Provider } from 'react-redux'
import { store } from './stores'
import { enableScreens } from 'react-native-screens'
import {ColorContext} from './context/colorContext';
enableScreens()

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Provider store={store}>
        <ColorContext.Provider value={{
          isDark: isDark ? true : false,
          shuffle: () => setIsDark(!isDark)
        }}>
        <MainNavigation />
        </ColorContext.Provider>
      </Provider>
    </>
  )
}

export default App
