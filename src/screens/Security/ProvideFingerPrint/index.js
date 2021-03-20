import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackIcon from '../../../assets/images/BackIcon'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'

const LS = () => <Text>DONE</Text>
const index = ({ navigation }) => {
  return (
    <>
      <NavHeader
        rightSection={BackIcon}
        leftSection={LS}
        leftSectionAction={() => navigation.navigate("UseFingerprint")}
        navigation={navigation}
        title=""
      />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center' }}>
          <TouchableOpacity>
          <Ionicons name="finger-print" size={40} style={{  marginBottom: 20}}/>
          </TouchableOpacity>
          <Text>Touch your device sensor to add finger print</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default index
