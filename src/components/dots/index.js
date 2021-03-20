import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const index = ({ containerStyles, first, second, third }) => {
  return (
    <View style={[styles.container, { containerStyles }]}>
      <View
        style={[styles.dot, { backgroundColor: first ? '#673AB7' : '#fff' }]}
      />
      <View
        style={[styles.dot, { backgroundColor: second ? '#673AB7' : '#fff' }]}
      />
      <View
        style={[styles.dot, { backgroundColor: third ? '#673AB7' : '#fff' }]}
      />
    </View>
  )
}

export default index
