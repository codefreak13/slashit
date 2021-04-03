import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Card from '../../components/Card/Card.screen'
import Modal from '../../components/Modal/Modal.screen'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './ManageCards.style'

const ManageCards = ({ navigation }) => {
  const [visible, setVisble] = useState(false)

  const showModal = () => setVisble(true)
  const hideModal = () => setVisble(false)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal visible={visible}>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <TouchableOpacity onPress={hideModal} style={styles.xicon}>
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
      </Modal>

      <SafeAreaView>
        <NavHeader
          close
          navigation={navigation}
          title="Manage Cards"
        />

        <View style={styles.cardContainer}>
          <Card />
        </View>

        <View style={styles.topBtnContainer}>
          <TouchableOpacity style={styles.btn}>
            <View>
              <Text style={styles.btnText}>Set as preferred</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("AddNewCard")}>
            <View>
              <Text style={styles.btnText}>Add a new card</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.delBtnContainer}>
          <TouchableOpacity style={styles.btn}>
            <View>
              <Text style={styles.btnText}>Delete this card</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

export default ManageCards
