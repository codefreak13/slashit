import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { TransactionList } from '../Transactions/Transactions.screen'
import styles from './UpcomingRepayments.style'
import { Wrapper } from '../../components'
const List = ({ text, onPress, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('RepaymentDetails')}>
    <View style={styles.list}>
      <Text style={styles.listItem}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const LS = color => <EvilIcons color={color} name="calendar" size={28} />
const UpcomingRepayments = ({ navigation }) => {
  const [upcoming, setUpcoming] = useState([])
  const { colors } = useTheme()
  useEffect(() => {
    setUpcoming([
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00'
      },
      {
        date: 'Jul 12, 2020',
        time: '01:45 AM',
        amount: '6,900.00'
      }
    ])
  }, [])
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          backIcon
          navigation={navigation}
          leftSection={() => LS(colors.icons)}
          leftSectionAction={() => navigation.navigate('PaymentSchedule')}
          title="Upcoming Repayments"
        />
        <FlatList
          data={val}
          renderItem={({ item, index }) => (
            <TransactionList navigateTo="RepaymentDetails" data={item} />
          )}
          keyExtractor={item => Math.random()}
        />
        {/* <View>
          {upcoming.map((val, key) => (
            <TransactionList  navigateTo="RepaymentDetails" key={key} data={val} />
          ))}
        </View> */}
      </SafeAreaView>
    </Wrapper>
  )
}

export default UpcomingRepayments
