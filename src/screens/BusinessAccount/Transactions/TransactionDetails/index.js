import React from 'react'
import { Share, SafeAreaView, View, StatusBar } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import NavHeader from '../../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import List from './transactionLists'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Wrapper, Text } from '../../../../components'
import Button from '../../../../components/Button'
const LS = color => <Entypo color={color} name="share" size={24} />

const index = ({ route }) => {
  console.log(route, 'route')
  const { amount, date, time, type } = route.params.data
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Slashit'
      })
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
      alert(error.message)
    }
  }
  const navigation = useNavigation()
  const { colors } = useTheme()
  const CustomerId = <List label="Customer Id" value="12345" />
  const Order = <List label="Order #" value="22347899" />
  const To = <List label="To" value="Heritage bank PLC 3441976588" />
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        backIcon
        leftSection={() => LS(colors.icons)}
        leftSectionAction={() => onShare()}
        title="Transaction Details"
      />
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          27 JUN 2020 at 3:59PM
        </Text>
        <List label="Transaction Id" value="XDEH535KHJEK" />
        <List label="Status" value="Successful" />
        {type === 'Refunds'
          ? CustomerId
          : type === 'Payouts'
          ? CustomerId
          : null}
        {type === 'Refunds' ? Order : type === 'Payouts' ? Order : null}

        {type === 'Payouts' && <List label="Method" value="Pay In 3" />}

        <List label="Amount" value="NGN 200.00" />

        {type === 'Payouts' ? To : type === 'Transfers' ? To : null}

        <List label="Type" value={type} last />
        {type === 'Payouts' && (
          <Button
            onPress={()=>navigation.navigate("Refund")}
            textStyle={{ color: colors.aux }}
            title="Refund"
            containerStyle={{
              backgroundColor: colors.text,
              width: '40%',
              alignSelf: 'center'
            }}
          />
        )}
      </SafeAreaView>
    </Wrapper>
  )
}

export default index
