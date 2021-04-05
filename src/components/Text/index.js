import React from 'react'
import { Text as RNText, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

export const Text = ({ children, style }) => {
  const { colors } = useTheme()
  return (
    <RNText style={{ ...styles.text, color: colors.text, ...style }}>{children}</RNText>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
})
