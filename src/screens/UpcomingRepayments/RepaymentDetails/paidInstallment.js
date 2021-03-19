import React from 'react'
import { 
  Text,
  View, 
  TouchableOpacity
} from 'react-native' 
import styles from './styles';
import {useNavigation} from "@react-navigation/native";
const PaidInstallment = ({navigateTo}) => { 
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
            <Text style={{ color: '#673AB7' }}>Paid</Text>
          </View>
        </TouchableOpacity> 
  )
}

export default PaidInstallment;