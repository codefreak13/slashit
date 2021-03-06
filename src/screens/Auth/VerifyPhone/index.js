import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Wrapper } from '../../../components'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import LButton from '../../../components/LinearGradientButton'
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

        <LButton
          width="100%"
          borderRadius
          onPress={() => navigation.navigate('VerifyEmail')}
          title="Continue"
        />
      </SafeAreaView>
    </Wrapper>
  )
}

export default index
