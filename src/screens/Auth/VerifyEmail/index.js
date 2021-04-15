import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { Formik } from 'formik'
import * as yup from 'yup'
import {Wrapper} from '../../../components';
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import LButton from '../../../components/LinearGradientButton'
import Button from '../../../components/Button'
import styles from '../styles'

const validationSchema = yup.object().shape({
  code: yup.string().required('This field is required.')
})
const initialValues = {
  code: ''
}
const index = ({ navigation }) => {
  const [code, setCode] = useState('')
  return (
    <Wrapper>
      <NavHeader close navigation={navigation} title="" />

      <SafeAreaView style={styles.container}>
        <Text style={[styles.boldText, { color: '#000' }]}>
          Verify your email address
        </Text>
        <Text style={{ color: '#000' }}>
          Please enter the verification code sent to your Email
        </Text>
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <SmoothPinCodeInput
            cellStyle={{
              borderBottomWidth: 2,
              borderColor: 'gray'
            }}
            cellStyleFocused={{
              borderColor: 'black'
            }}
            value={code}
            onTextChange={code => setCode(code)}
          />
        </View>
        <Button
          onPress={() => console.log(code, 'code')}
          title="Open Email App"
          containerStyle={{
            width: '50%',
            borderRadius: 50,
            alignSelf: 'center',
            backgroundColor: 'transparent',
            borderWidth: 1,
            height: 40,
            paddingVertical: 1
          }}
          textStyle={{color: "#000"}}
        />
         
        <LButton
          width="100%"
          borderRadius
          onPress={() => navigation.navigate('SetNewPassword')}
          title="Continue"
        />
      </SafeAreaView>
    </Wrapper>
  )
}

export default index
