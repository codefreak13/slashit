import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const index = ({title, onPress, colors,start, end, xStart, yStart, xEnd, yEnd, containerStyle }) => {
  return (
    <LinearGradient
      start={start || { x: xStart || 1, y: yStart || 0 }}
      end={end || { x: xEnd || 0 , y: yEnd || 0 }}
      colors={colors || ['#851B97', '#673AB7']} 
      style={[styles.addCardButton, {containerStyle}]}>
      <TouchableOpacity  onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default index
const styles = StyleSheet.create({
  addCardButton: {
    backgroundColor: '#673AB7',
    width: '50%',
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
