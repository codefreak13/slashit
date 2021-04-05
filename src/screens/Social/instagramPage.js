import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native'
import { WebView } from 'react-native-webview';
 import AntDesign from 'react-native-vector-icons/AntDesign'
 import {useTheme} from '@react-navigation/native'
const index  = ({route, navigation}) => {
  const {colors} = useTheme()
  console.log(route)
  const {uri} = route.params
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <TouchableOpacity style={{padding: 7, backgroundColor: '#fff'}} onPress={()=> navigation.goBack()}>
      <AntDesign name="close" size={24} color="#000" />
      </TouchableOpacity>
    <WebView source={{ uri }} androidHardwareAccelerationDisabled />
    </SafeAreaView>
  )
}
export default index;