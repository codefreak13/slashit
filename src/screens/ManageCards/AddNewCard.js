import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './ManageCards.style'
const AddNewCard = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.xicon}>
          <AntDesign name="close" size={24} color="#000"/>
          </TouchableOpacity>

          <View style={styles.container}>
            <Text style={styles.modalText}>Enter your card details here</Text>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>Card Number</Text>

                <TextInput
                  style={styles.formInput}
                  placeholder="0000 0000 0000 0000"
                />
              </View>
            </View>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>Card Expiry</Text>

                <TextInput style={styles.formInput} placeholder="MM/YY" />
              </View>
            </View>

            <View style={styles.formControl}>
              <View style={styles.formInputContainer}>
                <Text style={styles.formLabel}>CVV</Text>

                <TextInput style={styles.formInput} placeholder="123" />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('BillingAddress')}
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10
              }}>
              <Ionicons name="add-circle-outline" size={24} />
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
      </SafeAreaView>
    )
}

export default AddNewCard
 
