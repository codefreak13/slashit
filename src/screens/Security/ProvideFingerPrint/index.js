import React, {useEffect} from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import TouchID from 'react-native-touch-id';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackIcon from '../../../assets/images/BackIcon'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import {Wrapper} from '../../../components';
import styles from './styles'
import {optionalConfigObject} from '../../../utils/fingerPrintScannerConfig'
// const optionalConfigObject = {
//   title: 'Authentication Required', // Android
//   imageColor: '#e00606', // Android
//   imageErrorColor: '#ff0000', // Android
//   sensorDescription: 'Touch sensor', // Android
//   sensorErrorDescription: 'Failed', // Android
//   cancelText: 'Cancel', // Android
//   fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
//   unifiedErrors: false, // use unified error messages (default false)
//   passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
// };
const LS = () => <Text>DONE</Text>
const index = ({ navigation }) => {

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
        rightSection={BackIcon}
        leftSection={LS}
        leftSectionAction={() => navigation.navigate("UseFingerprint")}
        navigation={navigation}
        title=""
      />
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>_pressHandler()}>
          <Ionicons name="finger-print" size={40} style={{  marginBottom: 20}}/>
          </TouchableOpacity>
          <Text>Touch your device sensor to add finger print</Text>
        </View>
      </SafeAreaView>
    </Wrapper>
  )
}

export default index
