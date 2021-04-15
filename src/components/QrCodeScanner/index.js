import React, { Component } from 'react'
import  LinearWrapper  from '../LinearGradientButton'
import { StyleSheet, Linking, View } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import Nav from '../NavHeader/NavHeader.screen'
const Scanner = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
		return (
       
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <View style={{flex: 1,
            marginTop:Platform.OS === 'android' ? -15 : 10,
            fontSize: 18,
            padding: 32,
            color: '#777'}}>

          <Nav close closeWhite="#000"/>
          </View>
        }
      />
    );
}

export default Scanner
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
})
