import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.divider}></View>
  )
}

export default index

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 5,
    // backgroundColor: '#303030',
    marginVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
})
