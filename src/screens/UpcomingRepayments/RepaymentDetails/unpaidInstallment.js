import React, {   useState } from 'react'
import { 
  Text,
  View,
  TouchableOpacity
} from 'react-native' 
import styles from './styles'
import RoundCheckbox from 'react-native-round-checkbox'
import {useNavigation} from "@react-navigation/native";
const UnPaidInstallment = ({ name, navigateTo }) => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false)
  return (
    <View style={styles.unpaidContainer}>
    <RoundCheckbox
      size={24}
      borderColor={'#000'}
      backgroundColor={'black'}
      iconColor={'white'}
      checked={isChecked}
      onValueChange={checked => setIsChecked(checked)}
    />
     <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}
      style={styles.box}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.boldText}>
          {name} Installment
        </Text>
        <Text>DUE 27 Jun 2020</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.boldText}>NGN 200.00</Text> 
      </View>
    </TouchableOpacity>
    </View>
  )
}
 

export default UnPaidInstallment;