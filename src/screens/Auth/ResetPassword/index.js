import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import LButton from '../../../components/LinearGradientButton'
import {Wrapper} from '../../../components';
import styles from '../styles'


const validationSchema = yup.object().shape({
  input: yup.string().required('This field is required.'), 
})
const initialValues = {
  input: '', 
}
const BackIcon = () => <MaterialIcons name="keyboard-backspace" size={24} />
const index = ({navigation}) => {
  return (
    <Wrapper>
    <NavHeader navigation={navigation} title="" />

    <SafeAreaView style={styles.container}>
      <Text style={[styles.boldText, {color:'#000'}]}>
        Reset your password
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
              value={values.input}
              onChangeText={handleChange('input')}
              errors={errors.input}
              touched={touched.input}
              name={values.input}
              placeholder="Enter your Email or Phone Number"
            />
            <LButton
                  width="100%"
                  borderRadius
                  onPress={()=> navigation.navigate("VerifyPhone")}
              title="Send link" 
                />
          </>
        )}
      </Formik>
    </SafeAreaView>
    </Wrapper>
  )
}

export default index
 
