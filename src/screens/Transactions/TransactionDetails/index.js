import React from 'react'
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from 'react-native'
import BackIcon from '../../../assets/images/BackIcon'
import Entypo from 'react-native-vector-icons/Entypo'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import List from './transactionLists'
import {useNavigation} from '@react-navigation/native';
const LS = () => <Entypo name="share" size={24} />
 
const index = () => {
  const navigation = useNavigation()
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        rightSection={BackIcon}
        leftSection={LS}
        leftSectionAction={() => console.log('PaymentSchedule')}
        title="Transaction Details"
      />
      <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 16}}>27 JUN 2020 at 3:59PM</Text>
        <List label="Transaction Id" value="XDEH535KHJEK"/>
        <List label="Status" value="Successful"/>
        <List label="Merchant" value="Nike Stores"/>
        <List label="Order #" value="22347899" onPress={() => navigation.navigate("RepaymentDetails")}/>
        <List label="Amount" value="NGN 200.00"/>
        <List label="Type" value="First Installments" last/>
      </SafeAreaView>
    </>
  )
}

export default index
