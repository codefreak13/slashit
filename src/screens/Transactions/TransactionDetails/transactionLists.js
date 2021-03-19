import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const index = ({ label, value, last, onPress }) => {
  return (
    <View style={[styles.list, { borderBottomWidth: last ? 0 : 1 }]}>
      <Text>{label}</Text>
      {label === 'Order #' ? (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              color: '#673AB7'
            }}>
            {value}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text
          style={{
            color: label === 'Status' ? '#4CAF50' : '#303030'
          }}>
          {value}
        </Text>
      )}
    </View>
  )
}

export default index
