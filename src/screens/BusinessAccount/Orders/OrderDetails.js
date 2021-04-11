import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Text, Wrapper } from '../../../components'
import { useNavigation, useTheme } from '@react-navigation/native'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
const index = ({ data, navigateTo }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  return (
    <Wrapper onPress={() => navigation.navigate(navigateTo)}>
      <NavHeader backIcon navigation={navigation} title="Order #32456777" />
      <View style={[styles.top, { backgroundColor: '#99999932' }]}>
        <Text style={styles.boldText}>NGN 4,000.00</Text>
        <Text style={styles.boldText}>Nike Store</Text>
        <Text>Created Jun 13, 2020 5:38 PM</Text>
        <Text>Customer Id 340192</Text>
        <Text>turtleapp@gmail.com</Text>
      </View>
      <View
        style={[
          styles.top,
          { backgroundColor: '#99999932', alignItems: 'flex-start' }
        ]}>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Product Name</Text>
          <Text>Red Roses</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Description</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text>Red Roses</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Total</Text>
          <Text>#4,000.00</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Shipping address</Text>
          <Text>20 main street</Text>
        </View>
      </View>

      <Text style={{ color: 'green', textAlign: 'center' }}>Completed</Text>
    </Wrapper>
  )
}

export default index

const styles = StyleSheet.create({
  top: {
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 7
  },
  boldText: { fontSize: 15, fontWeight: 'bold', marginBottom: 4 }
})
