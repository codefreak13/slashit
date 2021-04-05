import React from 'react'
import {   View, SafeAreaView,TouchableOpacity, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './ManageCards.style'
import {Text, Wrapper} from '../../components' 
import {useTheme} from '@react-navigation/native'
const AddNewCard = ({navigation}) => {
  const {colors} = useTheme()
    return (
        <Wrapper>
        <View>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.xicon}>
          <AntDesign name="close" size={24} color={colors.icons}/>
          </TouchableOpacity>

          <View>
            <Text style={styles.modalText}>Enter your card details here</Text>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>Card Number</Text>

                <TextInput
                  style={styles.formInput}
                  placeholder="0000 0000 0000 0000"
                  placeholderTextColor={colors.placeHolderTextColor}
                />
              </View>
            </View>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>Card Expiry</Text>

                <TextInput style={styles.formInput} placeholder="MM/YY" placeholderTextColor={colors.placeHolderTextColor}/>
              </View>
            </View>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>CVV</Text>

                <TextInput style={styles.formInput} placeholder="123" placeholderTextColor={colors.placeHolderTextColor}/>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BillingAddress')}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Ionicons color={colors.icons} name="add-circle-outline" size={24} />
              <Text style={{ fontWeight: 'bold' }}>Billing address.</Text>
            </TouchableOpacity>
            <Text style={styles.policyText}>
              By clicking the button below you agree to our Terms, Privacy
              Policy and Cookie Policy.
            </Text>

            <TouchableOpacity style={styles.addCardButton}>
              <Text style={{ color: '#fff' }}>Add card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    )
}

export default AddNewCard
 
