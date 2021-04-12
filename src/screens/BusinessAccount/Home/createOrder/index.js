import React, { useState } from 'react'
import {
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import BaseInput from '../../../../components/BaseInput'
import NavHeader from '../../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import { Text, Wrapper } from '../../../../components'
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const validationSchema = yup.object().shape({
  productName: yup.string().required('This field is required.'),
  description: yup.string().required('This field is required.'),
  amount: yup.number().required('This field is required.'),
  shippingCost: yup.string().required('This field is required.'),
  streetAddress: yup.string().required('This field is required.'),
  city: yup.string().required('This field is required.'),
  country: yup.string().required('This field is required.'),
  state: yup.string().required('This field is required.'),
  postCode: yup.number().required('This field is required.')
})
const initialValues = {
  productName: '',
  description: '',
  amount: '',
  shippingCost: '',
  streetAddress: '',
  city: '',
  country: '',
  state: '',
  postCode: ''
}
const CreateText = color => <Text style={{ fontSize: 14,
    fontWeight: 'bold'}}>Create</Text>
const index = ({ navigation }) => {
  const [image, setImage] = useState('')
  const handleImageResponse = async data => {
    console.log(data)
    setImage(data.uri)
  }
  const [profile, setProfile] = useState({
    name: 'Anna Appleseed',
    address: 'Main street, NYC',
    phone: '+23489787897789',
    email: 'turtle@gmail.com',
    supportEmail: 'support@turtle.com'
  })
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <NavHeader
          backIcon
          title="Create Order"
          leftSection={CreateText}
          leftSectionAction={() => console.log('object')}
          navigation={navigation}
        />

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
                value={values.productName}
                onChangeText={handleChange('productName')}
                errors={errors.productName}
                touched={touched.productName}
                name={values.productName}
                placeholder="Product Name"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.description}
                onChangeText={handleChange('description')}
                errors={errors.description}
                touched={touched.description}
                name={values.description}
                placeholder="Description"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.amount}
                onChangeText={handleChange('amount')}
                errors={errors.amount}
                touched={touched.amount}
                name={values.amount}
                placeholder="Amount"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.shippingCost}
                onChangeText={handleChange('shippingCost')}
                errors={errors.shippingCost}
                touched={touched.shippingCost}
                name={values.shippingCost}
                placeholder="Shipping Cost"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.streetAddress}
                onChangeText={handleChange('streetAddress')}
                errors={errors.streetAddress}
                touched={touched.streetAddress}
                name={values.streetAddress}
                placeholder="Street Address"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.city}
                onChangeText={handleChange('city')}
                errors={errors.city}
                touched={touched.city}
                name={values.city}
                placeholder="City"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.country}
                onChangeText={handleChange('country')}
                errors={errors.country}
                touched={touched.country}
                name={values.country}
                placeholder="Country"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.state}
                onChangeText={handleChange('state')}
                errors={errors.state}
                touched={touched.state}
                name={values.state}
                placeholder="State"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <BaseInput
                value={values.postCode}
                onChangeText={handleChange('postCode')}
                errors={errors.postCode}
                touched={touched.postCode}
                name={values.postCode}
                placeholder="PostCode"
                style={styles.style}
                inputStyle={styles.listData}
              />
              <Text style={styles.listData}>Product Images</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 15}}>
                <TouchableOpacity
                  onPress={() =>
                    launchImageLibrary(
                      { mediaType: 'photo' },
                      handleImageResponse
                    )
                  }
                  style={styles.profile}>
                  {image ? (
                    <Image
                      style={styles.profile}
                      source={{
                        uri: image
                      }}
                    />
                  ) : (
                    <Image
                      style={{ width: 40, height: 40 }}
                      source={require('../../../../assets/images/camera1.png')}
                      resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
                {data.map(item => (
                  <TouchableOpacity key={Math.random()}>
                    <Image
                      key={Math.random()}
                      style={styles.profile}
                      source={require('../../../../assets/images/profile.jpeg')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </Formik>
      </ScrollView>
    </Wrapper>
  )
}

export default index
