import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import Button from '../../../components/Button'
import styles from '../styles'

const validationSchema = yup.object().shape({
  code: yup.string().required('This field is required.')
})
const initialValues = {
  code: ''
}
const BackIcon = () => <AntDesign name="close" size={40} color="#000" />
const index = ({ navigation }) => {
  const [code, setCode] = useState('')
  return (
    <>
      <NavHeader rightSection={BackIcon} navigation={navigation} title="" />

      <SafeAreaView style={styles.container}>
        <Text style={[styles.boldText, { color: '#000' }]}>
          Verify your phone number
        </Text>
        <Text style={{ color: '#000' }}>
          Please enter the verification code sent to your phone number
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
          onPress={() => navigation.navigate('VerifyEmail')}
          title="Continue"
          containerStyle={{
            borderRadius: 50,
            marginVertical: 20
          }}
        />
      </SafeAreaView>
    </>
  )
}

export default index
