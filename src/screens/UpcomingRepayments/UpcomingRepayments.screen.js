import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import BackIcon from '../../assets/images/BackIcon'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { TransactionList } from '../Transactions/Transactions.screen'
import styles from './UpcomingRepayments.style'

const List = ({ text, onPress, navigation }) => (
  <TouchableOpacity onPress={()=>navigation.navigate("RepaymentDetails")}>
    <View style={styles.list}>
      <Text style={styles.listItem}>{text}</Text>
    </View>
  </TouchableOpacity>
)

const LS = () => <EvilIcons name="calendar" size={28} />
const UpcomingRepayments = ({ navigation }) => {
  const [upcoming, setUpcoming] = useState([])

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          rightSection={BackIcon}
          navigation={navigation}
          leftSection={LS}
          leftSectionAction={() => navigation.navigate("PaymentSchedule")}
          title="Upcoming Repayments"
        />

        <View>
          {upcoming.map((val, key) => (
            <TransactionList  onPress={()=>navigation.navigate("RepaymentDetails", {id: 'kk'})} key={key} data={val} />
          ))}
        </View>
      </SafeAreaView>
    </>
  )
}

export default UpcomingRepayments
