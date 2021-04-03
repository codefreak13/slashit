import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import BackIcon from '../../assets/images/BackIcon'
import BaseInput from '../../components/BaseInput'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './Profile.style'

const validationSchema = yup.object().shape({
  name: yup.string().required('This field is required.'),
  address: yup.string().required('This field is required.'),
  phone: yup.string().required('This field is required.'),
  email: yup.string().email().required('This field is required.')
})
const initialValues = {
  email: '',
  password: ''
}
const EditIcon = () => <Text>Save</Text>
const EditProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: 'Anna Appleseed',
    address: 'Main street, NYC',
    phone: '+23489787897789',
    email: 'turtle@gmail.com'
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          rightSection={BackIcon}
          leftSection={EditIcon}
          leftSectionAction={() => console.log('object')}
          navigation={navigation}
        />

        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
          />
        </TouchableOpacity>

        <Formik
          initialValues={{
            name: 'Anna Appleseed',
            address: 'Main street, NYC',
            phone: '+23489787897789',
            email: 'turtle@gmail.com'
          }}
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
                value={values.name}
                defaultValue="Chidera"
                onChangeText={handleChange('name')}
                errors={errors.name}
                touched={touched.name}
                name={values.name}
                placeholder="Name"
                style={styles.style}
								inputStyle={styles.listData}
              />
              <BaseInput
                value={values.address}
                onChangeText={handleChange('address')}
                errors={errors.address}
                touched={touched.address}
                name={values.address}
                placeholder="Address"
                style={styles.style}
								inputStyle={styles.listData}
              />
              <BaseInput
                value={values.phone}
                onChangeText={handleChange('phone')}
                errors={errors.phone}
                touched={touched.phone}
                name={values.phone}
                placeholder="Phone"
                style={styles.style}
								inputStyle={styles.listData}
              />
              <BaseInput
                value={values.email}
                onChangeText={handleChange('email')}
                errors={errors.email}
                touched={touched.email}
                name={values.email}
                placeholder="Email"
                style={styles.style}
                inputStyle={styles.listData}
              />
            </>
          )}
        </Formik>

        
      </SafeAreaView>
    </>
  )
}

export default EditProfile
