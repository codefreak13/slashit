import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const index = ({width,alignSelf, wrapperStyle, title, borderRadius,onPress, colors,start, end, xStart, yStart, xEnd, yEnd, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{width, alignSelf: alignSelf || 'center' , ...wrapperStyle}}>
    <LinearGradient
      start={start || { x: xStart || 1, y: yStart || 0 }}
      end={end || { x: xEnd || 0 , y: yEnd || 0 }}
      colors={colors || ['#851B97', '#673AB7']} 
      style={[styles.addCardButton,{borderRadius: borderRadius ? 50 : 0}, {containerStyle}]}>
    
        <Text style={styles.buttonText}>{title}</Text>
     
    </LinearGradient>
    </TouchableOpacity>
  )
}

export default index
const styles = StyleSheet.create({
  addCardButton: {
    backgroundColor: '#673AB7',
    width: '100%',
    alignItems: 'center',
    height: 46,
    justifyContent: 'center',
    marginTop: 18,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
})
