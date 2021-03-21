import React, { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import BackIcon from '../../assets/images/BackIcon'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import {useNavigation} from "@react-navigation/native";

export const NotificationList = ({ data, navigateTo }) =>{
  const navigation = useNavigation()
  return  (
  <TouchableOpacity onPress={()=> {}}>
    <View style={styles.list}>
      <View style={[styles.listItem, {flex: 2}]}>
        <Text>{data.title}</Text> 
      </View>
      <View style={[styles.listItem, {flex: 1, alignItems: 'flex-end'}]}>
        <Text>{data.date}</Text> 
      </View>
    </View>
  </TouchableOpacity>
)
}

const index = ({ navigation }) => {
  const [transactions, setTransaction] = useState([])

  useEffect(() => {
    setTransaction([
      {
        date: 'Overdue',
        title: 'Missed repayment of #12,000.00'
      },
      {
        date: 'Due today',
        title: 'Upcoming repayment of #12,000.00'
      },
      {
        date: 'Due in 3 days',
        title: 'Upcoming repayment of #12,000.00'
      },
      {
        date: 'Due in 5 days',
        title: 'Upcoming repayment of #12,000.00'
      },
      
       
    ])
  }, [])
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          rightSection={BackIcon}
          navigation={navigation}
          title="Notifications"
        />

        <View>
          {transactions.map((val, key) => (
            <NotificationList   key={key} data={val} />
          ))}
        </View>
      </SafeAreaView>
    </>
  )
}

export default index
