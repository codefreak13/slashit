import React from 'react'
import {
  Linking,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import Button from '../../../components/Button'
import styles from '../styles'

const validationSchema = yup.object().shape({
  firstName: yup.string().email().required('This field is required.'),
  lastName: yup.string().email().required('This field is required.'),
  email: yup.string().email().required('This field is required.'),
  phone: yup.string().required('This field is required.'),
  password: yup.string().required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.')
})
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
}

const BackIcon = () => <MaterialIcons name="keyboard-backspace" size={24} />
const index = ({ navigation }) => {
  return (
    <>
      <NavHeader rightSection={BackIcon} navigation={navigation} title="" />

      <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.boldText}>Create a Shopper account</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values =>
            Linking.openURL(`https://www.slashit.me/register`)
          }>
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
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                errors={errors.firstName}
                touched={touched.firstName}
                name={values.firstName}
                placeholder="First Name"
              />
              <BaseInput
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                errors={errors.lastName}
                touched={touched.lastName}
                name={values.lastName}
                placeholder="Last Name"
              />

              <BaseInput
                value={values.email}
                onChangeText={handleChange('email')}
                errors={errors.email}
                touched={touched.email}
                name={values.email}
                placeholder="Email"
              />

              <BaseInput
                value={values.phone}
                onChangeText={handleChange('phone')}
                errors={errors.phone}
                touched={touched.phone}
                name={values.phone}
                placeholder="+234"
              />
              <View style={{ alignItems: 'center', marginVertical: 6 }}>
                <Text>Why do you need my phone number?</Text>
                <Text style={{ textAlign: 'center' }}>
                  We need your phone number to send you repayment reminders
                </Text>
              </View>
              <BaseInput
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                errors={errors.password}
                touched={touched.password}
                name={values.password}
                placeholder="Password"
              />

              <BaseInput
                secureTextEntry
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
                name={values.confirmPassword}
                placeholder="Confirm Password"
              />
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  marginVertical: 10
                }}>
                By clicking the button below you agree to our Terms, Privacy
                Policy and Cookie Policy
              </Text>
              <Button
                onPress={handleSubmit}
                title="Sign up"
                containerStyle={{ borderRadius: 50 }}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('BusinessAccountSignin')}
                 >
                <Text>
                  Already have an account?{' '}
                  <Text style={{ fontWeight: 'bold', color: '#673AB7' }}>
                    Sign in
                  </Text>
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default index
