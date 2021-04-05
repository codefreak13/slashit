import React from 'react'
import {   View,SafeAreaView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import Button from '../../../components/Button' 
import styles from '../styles'
import {Wrapper, Text} from '../../../components'; 
import {useTheme} from '@react-navigation/native' 

const validationSchema = yup.object().shape({
  email: yup.string().email().required('This field is required.'),
  password: yup.string().required('This field is required.')
})
const initialValues = {
  email: '',
  password: ''
}

 
const index = ({navigation}) => {
  const {colors} = useTheme()
  return (
    <Wrapper>
      <NavHeader
          navigation={navigation}
          title=""
        />

    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(`https://www.slashit.me/register`)}>
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
              style={{...styles.boldText, color: colors.primary}}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
            <Button
              onPress={handleSubmit}
              title="Sign in"
              containerStyle={{ borderRadius: 50 }}
            />
            <View style={{backgroundColor: '', alignItems: 'center', paddingVertical: 30}}>
            <Text>Or</Text>

            <TouchableOpacity
            onPress={()=> navigation.navigate("BusinessAccountSignup")}
              style={{marginVertical: 20}}>
              <Text>
                Sign up for a business account?{' '}
                <Text style={{ fontWeight: 'bold', color:   colors.primary }}>
                 here
                </Text>
              </Text>
            </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>

    </Wrapper>
  )
}

export default index
 
