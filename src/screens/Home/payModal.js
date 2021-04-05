import React from 'react'
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
import CurrencyInput from 'react-native-currency-input';
import { useTheme } from '@react-navigation/native'
const index = ({ navigation, visible, setModal, openCloseModalOpenPinModal }) => {
  const [value, setValue] = React.useState(0);
  const { colors } = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal visible={visible}>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.appBackground }}>
          <View>
           <TouchableOpacity onPress={setModal} style={styles.xicon}>
              <AntDesign name="close" size={24} color="#fff"/>
            </TouchableOpacity> 
            <View
              style={styles.inputContainer}>
              <Text style={styles.textInput}>{'\u20A6'}</Text> 
               <CurrencyInput
               placeholder="0.00"
               placeholderTextColor="#fff"
               style={styles.textInput}
      value={value}
      onChangeValue={setValue}
      // unit="$"
      delimiter=","
      separator="."
      precision={2}
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // $2,310.46
      }}
    />
            </View> 
            <LButton title="Pay now" onPress={openCloseModalOpenPinModal}/>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default index
const styles = StyleSheet.create({
  xicon: {
    height: 50, 
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 50
  },
  addCardButton: {
    backgroundColor: '#673AB7',
    width: '50%',
    alignItems: 'center',
    height: 46,
    justifyContent: 'center',
    marginTop: 18,
    alignSelf: 'center'
  },
  textInput: { fontSize: 50, color: '#fff' },
  linearGradient: {
    width: '50%' 
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
    marginVertical: 40
  }
})
