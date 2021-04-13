import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TouchID from 'react-native-touch-id'
import { useTheme, useNavigation} from '@react-navigation/native'
import { Text } from '../../../components'
import Modal from '../../../components/Modal/Modal.screen'
import { optionalConfigObject } from '../../../utils/fingerPrintScannerConfig'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import {show} from '../../../utils/toast' 
const index = ({
  // navigation,
  visible,
  setModal,
  onRequestClose,
  onClosePinModalOpenSuccessModal
}) => {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const _pressHandler = () => {
    console.log('hiiiii')
    TouchID.authenticate(
      'Scan your Fingerprint on the device scanner to continue',
      optionalConfigObject
    )
      .then(success => {
        console.log('Authenticated Successfully')
        show("Successful")
        navigation.navigate("BusinessHomeScreen")
      })
      .catch(error => {
        show("Your device does not support Touch Id") 
        console.log(error,'Authentication Failed')
      })
  }

  useEffect(() => {
    // check if device supports fingerPrint Auth
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.')
        } else {
          console.log('TouchID is supported.')
        }
      })
      .catch(error => {
        // Failure code
        console.log(error)
      })
  }, [])
  const [code, setCode] = useState('') 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal transparent visible={visible} onRequestClose={onRequestClose}>
        <SafeAreaView
          style={[styles.centeredView, { backgroundColor: colors.listCard }]}>
          <View style={{ width: '100%' }}>
            <View style={styles.container}>
              <TouchableOpacity onPress={onRequestClose} style={{ position: 'absolute', left: 10, top: -15 }}>
                <AntDesign
                  color={colors.icons}
                  name="close"
                  size={20}
                />
              </TouchableOpacity>
              <Text style={styles.codeTitleLabel}>Enter PIN</Text>
              <SmoothPinCodeInput
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'gray'
                }}
                cellStyleFocused={{
                  borderColor: 'black'
                }}
                value={code}
                onTextChange={code => setCode(code)}
              />
            </View>
            <TouchableOpacity
              onPress={() => _pressHandler()}
              style={{ alignItems: 'center', marginTop: 20 }}>
              <Ionicons color={colors.icons} name="finger-print" size={40} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default index
const styles = StyleSheet.create({
  centeredView: {
    paddingVertical: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    borderRadius: 15,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  divider: {
    width: '100%',
    // height: 1, S
    // marginVertical: 6,
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#c4aead',
    paddingVertical: 20,
    alignItems: 'center'
  },
  container: {
    // backgroundColor: 'red',
    alignItems: 'center',
    // paddingTop: 100,
    paddingHorizontal: 50
  },
  codeTitleLabel: {
    fontSize: 18,
    marginVertical: 12
  }
})
