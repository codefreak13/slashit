import React from 'react';
import {SafeAreaView} from 'react-native'
import { WebView } from 'react-native-webview'; 
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
const index  = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavHeader
          navigation={navigation}
          title=""
        />
    <WebView
    source={{ uri: 'https://infinite.red' }}
    androidHardwareAccelerationDisabled
  />
  </SafeAreaView>
  )
}
export default index;