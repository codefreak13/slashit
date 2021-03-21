import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import Button from '../../../components/Button'
import styles from '../styles'


const validationSchema = yup.object().shape({
  email: yup.string().email().required('This field is required.'),
  password: yup.string().required('This field is required.')
})
const initialValues = {
  email: '',
  password: ''
}
const index = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.slashit}>
        SlashIt
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
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
              value={values.email}
              onChangeText={handleChange('email')}
              errors={errors.email}
              touched={touched.email}
              name={values.email}
              placeholder="Email"
            />
            <BaseInput
            secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              errors={errors.password}
              touched={touched.password}
              name={values.password}
              placeholder="Password"
            />
             <TouchableOpacity onPress={()=>navigation.navigate("ResetPassword")}>
            <Text
              style={styles.boldText}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
            <Button
              onPress={handleSubmit}
              title="Sign in"
              containerStyle={{ borderRadius: 50 }}
            />
            <Button
            onPress={()=> navigation.navigate("Signup")}
              title="Sign up"
              textStyle={{ color: '#673AB7' }}
              containerStyle={{
                borderRadius: 50,
                backgroundColor: 'transparent'
              }}
            />

            <TouchableOpacity
            onPress={()=>navigation.navigate("BusinessAccountSignin")}
              style={styles.bizAcc}>
              <Text>
                Business account?{' '}
                <Text style={{ fontWeight: 'bold', color: '#673AB7' }}>
                  Sign in here
                </Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default index
 
