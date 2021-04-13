import React, {useContext} from 'react'
import {  TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import {AuthContext} from '../../../context/authContext';
import BaseInput from '../../../components/BaseInput'
import Button from '../../../components/Button'
import LButton from '../../../components/LinearGradientButton'
import styles from '../styles'
import {Wrapper, Text} from '../../../components';
import {WToast} from 'react-native-smart-tip'
import {useTheme} from '@react-navigation/native' 

const validationSchema = yup.object().shape({
  email: yup.string().email().required('This field is required.'),
  password: yup.string().required('This field is required.')
})
const initialValues = {
  email: '',
  password: ''
}
const show = (msg) => {
  const toastOpts = {
      data: msg,
      textColor: '#ffffff',
      backgroundColor: '#444444',
      duration: WToast.duration.LONG, //1.SHORT 2.LONG
      position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
  }
  
  WToast.show(toastOpts)
} 
const index = ({navigation}) => {
  const {colors} = useTheme()
  const {signIn} = useContext(AuthContext);
  const check = ({email, password}) => {
    if(email === "test@gmail.com"  && password === "12345"){
      signIn('d23nh6890knsaweeee', email, 'shopperAccount')
    }else if(email !== "test@gmail.com"){
      show("This email does not exist!")
    }else if(password !== "12345"){
      show("Password is incorrect")
    }else{
      show("Check yor login credentials")
    }
  }
  return (
    <Wrapper>
      <Text style={{...styles.slashit, color: colors.primary}}>
        SlashIt
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => check(values)}>
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
              style={{...styles.boldText,  color: colors.primary}}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
            <Button
              onPress={handleSubmit}
              title="Sign in"
              containerStyle={{ borderRadius: 50, width: '100%' }}
            />
            <Button
             onPress={()=> navigation.navigate("Signup")}
              title="Sign up"
              textStyle={{ color:   colors.primary }}
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
                <Text style={{ fontWeight: 'bold', color:  colors.primary }}>
                  Sign in here
                </Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </Wrapper>
  )
}

export default index
 
