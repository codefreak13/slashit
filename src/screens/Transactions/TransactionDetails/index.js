import React from 'react'
import { Share, SafeAreaView, View, StatusBar } from 'react-native'
import BackIcon from '../../../assets/images/BackIcon'
import Entypo from 'react-native-vector-icons/Entypo'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import List from './transactionLists'
import {useNavigation, useTheme} from '@react-navigation/native';
import {Wrapper, Text} from '../../../components'; 
const LS = (color) => <Entypo color={color} name="share" size={24} />
 
const index = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Slashit',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const navigation = useNavigation()
  const {colors} = useTheme()
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <NavHeader
      backIcon
        leftSection={()=>LS(colors.icons)}
        leftSectionAction={() => onShare()}
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
    </Wrapper>
  )
}

export default index
