import React, { useState } from 'react'
import { useEffect } from 'react'
import { SafeAreaView,FlatList, StatusBar, View, TouchableOpacity } from 'react-native'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './Transactions.style'
import { Text, Wrapper } from '../../components'
import { useNavigation, useTheme } from '@react-navigation/native'

export const TransactionList = ({ data, navigateTo }) => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(navigateTo || 'TransactionDetails')}>
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

const Transactions = ({ navigation }) => {
  const [transactions, setTransaction] = useState([])

  useEffect(() => {
    setTransaction([
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00',
        type: 'Payment'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00',
        type: 'Payment'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00',
        type: 'Payment'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00',
        type: 'Payment'
      }
    ])
  }, [])
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader backIcon navigation={navigation} title="Transactions" />
        <FlatList
          data={transactions}
          renderItem={({ item, index }) => <TransactionList data={item} />}
          keyExtractor={item => Math.random()}
        />
        {/* <View>
          {transactions.map((val, key) => (
            <TransactionList   key={key} data={val} />
          ))}
        </View> */}
      </SafeAreaView>
    </Wrapper>
  )
}

export default Transactions
