import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar, 
  View,
  TouchableOpacity
} from 'react-native'
import styles from '../../Transactions//Transactions.style'
import {Text, Wrapper} from '../../../components'
import {useNavigation, useTheme} from "@react-navigation/native";

 const index = ({ data, navigateTo }) =>{
  const navigation = useNavigation()
  const {colors} = useTheme()
  return  (
  <TouchableOpacity onPress={()=> navigation.navigate('OrderDetails')}>
    <View style={[styles.list, {backgroundColor: colors.listCard}]}>
      <View style={styles.listItem}>
        <Text style={{fontWeight: 'bold'}}>{data.productName}</Text>
        <Text>NGN {data.amount}</Text>
      </View>
      <View style={styles.listItem}>
        <Text>{data.date}</Text> 
      </View>
    </View>
  </TouchableOpacity>
)
}


export default index
