import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Formik } from 'formik'
import * as yup from 'yup'
import BaseInput from '../../../components/BaseInput'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import Button from '../../../components/Button'
import styles from '../styles'


const validationSchema = yup.object().shape({ 
  password: yup.string().required('This field is required.'),
  confirmPassword: yup.string().required('This field is required.')
})
const initialValues = { 
  password: '',
  confirmPassword: ''
}
const BackIcon = () => <AntDesign name="close" size={40} color="#000" />
const index = ({navigation}) => {
  return (
    <>
    <NavHeader rightSection={BackIcon} navigation={navigation} title="" />

    <SafeAreaView style={styles.container}>
      <Text style={[styles.boldText, {color:'#000'}]}>
        Set a new Password
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
            
            <Button
            onPress={handleSubmit}
              title="Done" 
              containerStyle={{
                borderRadius: 50,
              }}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
    </>
  )
}

export default index
 
