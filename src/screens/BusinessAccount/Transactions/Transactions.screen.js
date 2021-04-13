import React, { useState } from 'react'
import { useEffect } from 'react'
import { SafeAreaView,FlatList, StatusBar, View, TouchableOpacity } from 'react-native'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './Transactions.style'
import { Text, Wrapper } from '../../../components'
import { useNavigation, useTheme } from '@react-navigation/native'

const TransactionList = ({ data, navigateTo }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TransactionDetails', {data})}>
      <View style={[styles.list, { backgroundColor: colors.listCard }]}>
        <View style={styles.listItem}>
          <Text>{data.date}</Text>
          <Text>{data.time}</Text>
        </View>
        <View style={styles.listItem}>
          <Text>{data.amount}</Text>
          <Text>{data.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const data = [
  {
    date: 'Jul 12, 2020',
    time: '01:45 AM',
    amount: '6,900.00',
    type: 'Payouts'
  },
  {
    date: 'Jul 12, 2020',
    time: '01:45 AM',
    amount: '6,900.00',
    type: 'Refunds'
  },
  {
    date: 'Jul 12, 2020',
    time: '01:45 AM',
    amount: '6,900.00',
    type: 'Transfers'
  }, 
]
const Transactions = ({ navigation }) => {
  const [transactions, setTransaction] = useState([])
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader backIcon navigation={navigation} title="Transactions" />

        <FlatList
          data={data}
          renderItem={({ item, index }) => <TransactionList data={item} />}
          keyExtractor={item => Math.random()}
        />
      </SafeAreaView>
    </Wrapper>
  )
}

export default Transactions
