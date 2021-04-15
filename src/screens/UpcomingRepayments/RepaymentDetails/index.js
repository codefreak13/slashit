import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StatusBar, 
  View,
  ScrollView
} from 'react-native'
import BackIcon from '../../../assets/images/BackIcon'
import LButton from '../../../components/LinearGradientButton'
import Button from '../../../components/Button'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import {Wrapper, Text} from '../../../components';
import {useTheme} from '@react-navigation/native'
import styles from './styles'
import UnPaidInstallment from './unpaidInstallment'
import PaidInstallment from './paidInstallment'

const index = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false)
  const {colors} = useTheme()
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        backIcon
        navigation={navigation}
        title="Order #2234765"
      />
      <ScrollView contentContainerStyle={{flex: 1, paddingVertical: 5}}>
      <SafeAreaView style={styles.container}>
        <View style={[styles.top, {backgroundColor:colors.card }]}>
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
        <View style={{flex: 3,justifyContent: 'space-around', }}>
        <PaidInstallment navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Second" navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Third" navigateTo="TransactionDetails"/>
        <UnPaidInstallment name="Final" navigateTo="TransactionDetails"/>
        
        <LButton
        borderRadius
              width="50%"
              alignSelf="center"
              title="Pay now" 
              wrapperStyle={{marginTop: -10 }}
            />
        </View>
      </SafeAreaView>
      </ScrollView>
    </Wrapper>
  )
}

export default index
