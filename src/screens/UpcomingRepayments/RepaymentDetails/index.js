import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import BackIcon from '../../../assets/images/BackIcon'
import Button from '../../../components/Button'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import UnPaidInstallment from './unpaidInstallment'
import PaidInstallment from './paidInstallment'

const index = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        rightSection={BackIcon}
        navigation={navigation}
        title="Order #2234765"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.boldText}>Nike Store</Text>
          <Text style={{ fontSize: 12 }}>13 Jun 2020</Text>
          <View style={styles.divider} />
          <Text style={styles.boldText}>NGN 2,000.00</Text>
        </View>
        <View style={styles.prod}>
          <Text style={styles.boldText}>
            Lemon Queen Sunflower Bright Seeds{' '}
          </Text>
          <Text style={{ marginVertical: 7 }}>
            “30+ SEEDS” Plant Habit: Flowering Common Name: Sunflower Plant
            Type: Decorative Plant, Large Plant Season of Interest: Summer{' '}
          </Text>
          <Text>Shipping Address_</Text>
        </View>
        <View style={{flex: 3}}>
        <PaidInstallment navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Second" navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Third" navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Final" navigateTo="TransactionDetails"/>
        <Button
          title="Pay Now"
          containerStyle={{marginVertical: 20, width: '60%', alignSelf: 'center' }}
        />
        </View>
      </SafeAreaView>
    </>
  )
}

export default index
