import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const index = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: ''}}>
			<View style={{flex: 1,paddingHorizontal: 15}}>
      {children}
			</View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
