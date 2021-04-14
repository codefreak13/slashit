import React, {useContext} from 'react'
import {   View,SafeAreaView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Formik } from 'formik'
import * as yup from 'yup'
import {AuthContext} from '../../../context/authContext';
import BaseInput from '../../../components/BaseInput'
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
      signIn('d23nh6890knsaweeee', email, 'BusinessAccount')
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
      <NavHeader
          navigation={navigation}
          title=""
        />

    <SafeAreaView style={styles.container}>
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
              style={{...styles.boldText, color: colors.primary}}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
           
             <LButton 
            width = '100%' 
            borderRadius
            onPress={handleSubmit}
              title="Sign in"
            
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
 
