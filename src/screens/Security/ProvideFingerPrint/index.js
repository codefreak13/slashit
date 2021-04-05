import React, {useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar, 
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import TouchID from 'react-native-touch-id';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from "@react-navigation/native"
import NavHeader from '../../../components/NavHeader/NavHeader.screen' 
import styles from './styles'
import {optionalConfigObject} from '../../../utils/fingerPrintScannerConfig'
import {Text, Wrapper} from '../../../components'
const LS = () => <Text>DONE</Text>
const index = ({ navigation }) => {
const {colors} = useTheme()
   // handler to authenticate with touchId
   const _pressHandler = () => {
    console.log('hiiiii')
    TouchID.authenticate(
      'Scan your Fingerprint on the device scanner to continue',
      optionalConfigObject,
    ).then(success => {
        console.log('Authenticated Successfully');
      })
      .catch(error => {
        console.log('Authentication Failed');
      });
  };

  useEffect(() => {
    // check if device supports fingerPrint Auth
    TouchID.isSupported(optionalConfigObject)
      .then((biometryType) => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
        }
      })
      .catch((error) => {
        // Failure code
        console.log(error);
      });
  }, []);
  return (
    <Wrapper>
      <NavHeader
        backIcon
        leftSection={LS}
        leftSectionAction={() => navigation.navigate("UseFingerprint")}
        navigation={navigation}
        title=""
      />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>_pressHandler()}>
          <Ionicons color={colors.icons} name="finger-print" size={40} style={{  marginBottom: 20}}/>
          </TouchableOpacity>
          <Text>Touch your device sensor to add finger print</Text>
        </View>
      </SafeAreaView>
    </Wrapper>
  )
}

export default index
