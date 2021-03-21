import React, { useState } from 'react'
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
import Modal from '../Modal/Modal.screen'
import LButton from '../LinearGradientButton'
const index = ({ navigation, visible, setModal }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Modal transparent visible={visible}>
        <SafeAreaView style={styles.centeredView}>
          <TouchableOpacity onPress={setModal} style={styles.content}>
            <AntDesign name="checkcircle" size={50} style={styles.icon} />
            <Text>Successful</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default index
const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  content: {
    width: '100%',
    alignItems: 'center',
    width: '30%',
    paddingVertical: 10,
    borderTopWidth: 3,
    borderTopColor: '#c4aead'
  },
  icon: { color: '#4CAF50', marginVertical: 10 }
})
