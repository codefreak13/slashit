import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import CurrencyInput from 'react-native-currency-input'
import BaseInput from '../../../components/BaseInput'
import Button from '../../../components/Button'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Wrapper, Text } from '../../../components'
import PinModal from './enterPin';
const validationSchema = yup.object().shape({
  accountNumber: yup.string().required('This field is required.'),
  bank: yup.string().required('This field is required.'),
  amount: yup.number().required('This field is required.')
})
const initialValues = {
  accountNumber: '',
  bank: '',
  amount: ''
}
const index = ({ navigation }) => {
  const [value, setValue] = useState(0)
  const [visible, setVisible]  = useState(false)
  const togglePinModal = () =>
  setVisible(!visible)
  return (
    <Wrapper>
      <NavHeader navigation={navigation} title="Send money to" />
      <View style={{ flex: 1, backgroundColor: 'transparent', paddingVertical: 10,  }}>
        <Text style={{ textAlign: 'center', marginBottom: 30 }}>You're sending from: </Text>
        <View style={{marginBottom: 30}}>
          <Text style={{ fontSize: 17 }}>Available Balance</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>
            {'\u20A6'}7,500.00
          </Text>
        </View>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={() => togglePinModal()}>
          {({
            values,
            handleBlur,
            errors,
            touched,
            handleChange,
            handleSubmit
          }) => (
            <>
             <BaseInput
                value={values.accountNumber}
                onChangeText={handleChange('accountNumber')}
                errors={errors.accountNumber}
                touched={touched.accountNumber}
                name={values.accountNumber}
                placeholder="Account Number"
              />
              <BaseInput
                value={values.bank}
                onChangeText={handleChange('bank')}
                errors={errors.bank}
                touched={touched.bank}
                name={values.bank}
                placeholder="Bank"
              />
              <View style={styles.container}>
                <Text style={styles.codeTitleLabel}>Amount</Text>
                <CurrencyInput
                  placeholder="0.00"
                  placeholderTextColor="#fff"
                  style={styles.textInput}
                  value={value}
                  onChangeValue={setValue}
                  // unit="$"
                  delimiter=","
                  separator="."
                  precision={2}
                  onChangeText={formattedValue => {
                    console.log(formattedValue) // $2,310.46
                  }}
                />
              </View>

              <Text style={{ textAlign: 'center', marginVertical: 30 }}>
                You'll be charged a  #53 transfer fee
              </Text>
              <Button
                onPress={handleSubmit}
                title="Send"
                containerStyle={{
                  borderRadius: 50,
                  width: '50%',
                  alignSelf: 'center'
                }}
              />  
            </>
          )}
        </Formik>
      </View>
      <PinModal visible={visible} onRequestClose={()=>setVisible(!visible)}/>
    </Wrapper>
  )
}

export default index

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    color: '#999',
    backgroundColor: '#cecbcb63',
    width: '30%',
    height: 42,
    paddingLeft: 5,
    marginTop: 7
  }
})
