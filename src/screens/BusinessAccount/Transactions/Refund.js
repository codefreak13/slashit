import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import  Button from '../../../components/LinearGradientButton'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Wrapper, Text } from '../../../components'
import {  useTheme } from '@react-navigation/native'

const index = ({ navigation }) => {
  const { colors } = useTheme()
  return (
    <Wrapper>
      <NavHeader navigation={navigation} title="Refund" />
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 17 }}>Available Balance</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>
            {'\u20A6'}7,500.00
          </Text>
        </View>
        <View style={styles.boxView}>
          <Text style={{ fontSize: 16 }}>Full Refund</Text>
        </View>
        <View style={{ ...styles.boxView, width: '86%' }}>
          <Text style={{ fontSize: 16 }}>Partial Refund</Text>
        </View>

        <View style={{ ...styles.box, width: '60%' }}>
          <Text style={{ fontSize: 16 }}>Order # <Text style={{color: colors.primary}}>2233e45</Text></Text>
        </View>

        <View style={{ ...styles.boxView, width: '46%' }}>
          <Text style={{ fontSize: 16 }}>{'\u20A6'}7,500.00</Text>
        </View>

        <Button borderRadius title="Refund" containerStyle={{ borderRadius: 40,width: '40%', alignSelf: 'center', marginTop: 40}}/>
      </View>
    </Wrapper>
  )
}

export default index

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', paddingVertical: 10 },
  boxView: {
    marginBottom: 10,
    borderWidth: 0.8,
    borderColor: '#888',
    paddingHorizontal: 7,
    height: 48,
    justifyContent: 'center',
    borderRadius: 5
  },
  box: {
    marginBottom: 10, 
    paddingHorizontal: 7,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#99999932',
    borderRadius: 5
  }
})
