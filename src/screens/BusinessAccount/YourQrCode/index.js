import React, { useState } from 'react'
import QRCode from 'react-native-qrcode-svg'
import LinearGradient from 'react-native-linear-gradient'
import {SafeAreaView, View, Share } from 'react-native'
import { Wrapper, Text } from '../../../components'
import Entypo from 'react-native-vector-icons/Entypo'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { useTheme } from '@react-navigation/native'
const LS = color => <Entypo color={'#fff'} name="share" size={24} />
const index = ({ navigation }) => {
  const { qrCode, setQrCode } = useState('http://awesome.link.qr')
  const { colors } = useTheme()
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share QR Code'
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <SafeAreaView style={{flex: 1}}>
       <LinearGradient
      start={{ x: 1, y:  0 }}
      end={{ x:  0 , y:  0 }}
      colors={['#851B97', '#673AB7']} 
      style={{flex: 1}}>
      <NavHeader
        close
        closeWhite="#fff"
        titleColor="#fff"
        leftSection={() => LS(colors.icons)}
        leftSectionAction={() => onShare()}
        navigation={navigation}
        title="Your QR Code"
      />
      <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
        style={{ 
          width: 150,
          height: 150,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <QRCode value={qrCode} />
      </View>
      </View>
      
      </LinearGradient>
    </SafeAreaView>
  )
}

export default index
