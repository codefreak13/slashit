import React from 'react'
import {  
  View, 
  TouchableOpacity
} from 'react-native' 
import styles from './styles';
import { Text} from '../../../components';
import {useNavigation} from "@react-navigation/native";
import {useTheme} from '@react-navigation/native'
const PaidInstallment = ({navigateTo}) => { 
  const {colors} = useTheme()
  const navigation = useNavigation();
  return ( 
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}
          style={styles.paidContainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.boldText}>
              First Installment
            </Text>
            <Text>27 Jun 2020</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.boldText}>NGN 200.00</Text>
            <Text style={{ color: colors.primary }}>Paid</Text>
          </View>
        </TouchableOpacity> 
  )
}

export default PaidInstallment;