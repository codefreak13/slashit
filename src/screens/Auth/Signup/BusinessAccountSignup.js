import React from 'react';
import { WebView } from 'react-native-webview';
import {Wrapper} from '../../../components'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
const index  = ({navigation}) => {
  return (
    <>
    <NavHeader
          navigation={navigation}
          title=""
        />
    <WebView
    source={{ uri: 'https://infinite.red' }}
    androidHardwareAccelerationDisabled
  />
  </>
  )
}
export default index;