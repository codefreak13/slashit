import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient' 

const index = ({ children }) => {
  return ( 
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={['#851B97', '#673AB7']}
        style={{ flex: 1 }}>
        {children}
      </LinearGradient> 
  )
}

export default index
