import React, {useState} from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import Modal from '../../components/Modal/Modal.screen'
import LButton from '../../components/LinearGradientButton'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
const index = ({ navigation, visible, setModal }) => {
  const [code, setCode] = useState('')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal transparent visible={visible}>
        <SafeAreaView style={styles.centeredView}>
          <View style={{width: '100%'}}>
            <View style={styles.divider}>
             <Text style={{fontSize: 16}}>	Pay <Text style={{fontWeight: 'bold'}}>₦15,000.00</Text> at Nike Store</Text>
            </View> 
            <View style={styles.container}>
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
            <LButton title="Pay now" onPress={setModal}/>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default index
const styles = StyleSheet.create({
  centeredView: {
    paddingVertical: 10,
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
      height: 2,
    },
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
    color: '#212121',
    fontSize: 18,
    marginVertical: 12
  }
})
