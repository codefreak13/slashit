import React, { useState, useEffect } from 'react'
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
import Entypo from 'react-native-vector-icons/Entypo'
import BaseInput from '../../../../components/BaseInput'
import NavHeader from '../../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import { Text, Wrapper } from '../../../../components'
import { countries } from '../../../../components/CountryArray'
import Picker from '../../../../components/Picker'
const IMAGE_SIZE = 60
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

let stateArray = [];
const initial = [{ label: '', value: '' }];
const CreateText = color => (
  <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Create</Text>
);

const index = ({ navigation }) => {
  const [image, setImage] = useState('')
  const handleImageResponse = async data => {
    console.log(data)
    setImage(data.uri)
  }
  
  const [show, setShow] = useState(true)
  const [country, setCountry] = useState()
  const [countryStates, setCountryStates] = useState(initial)
  const [state, setState] = useState('')

  const onSetState = state => setState(state)

  // function to return a country and gets its states which it uses to populate the state array
  const onSetCountry = country => { 
    const {states} = countries.find(item => item.country === country);
    stateArray = []
    states.map(item => {
      let label = item
      let value = item
      let state = {
        label, value
      } 
      stateArray.push(state) 
    });
    setCountry(country)
    setCountryStates(stateArray) 
  } 
  
console.log(country, state, 'cccccc')
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        backIcon
        title="Create Order"
        leftSection={CreateText}
        leftSectionAction={() => navigation.navigate('OrderCreated')}
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
              <TouchableOpacity
                onPress={() => setShow(!show)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                  alignSelf: 'center'
                }}>
                <Text>Shipping Address</Text>
                <Entypo
                  name={show ? 'chevron-small-up' : 'chevron-small-down'}
                  size={28}
                />
              </TouchableOpacity>
              {show ? (
                <>
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
                  <Picker
                    PickerData={countries}
                    onValueChange={onSetCountry}
                    placeholder={{ label: 'Country', value: null }}
                  />
                  {
                    countryStates ? <Picker
                    PickerData={countryStates}
                    onValueChange={onSetState}
                    placeholder={{ label: 'State', value: null }}
                  /> : null
                  }
                   
                <View
                    style={{
                      borderBottomWidth: 0.6,
                      borderColor: '#757575',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      paddingHorizontal: 10
                    }}>
                    <BaseInput
                      value={values.state}
                      onChangeText={handleChange('state')}
                      errors={errors.state}
                      touched={touched.state}
                      name={values.state}
                      placeholder="State"
                      style={styles.style1}
                      inputStyle={styles.listData}
                    />
                    <BaseInput
                      value={values.postCode}
                      onChangeText={handleChange('postCode')}
                      errors={errors.postCode}
                      touched={touched.postCode}
                      name={values.postCode}
                      placeholder="PostCode"
                      style={styles.style1}
                      inputStyle={styles.listData}
                    />
                  </View> 
                </>
              ) : null}

              <Text
                style={{ ...styles.listData, marginLeft: 20, marginTop: 20 }}>
                Product Images
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 15 }}>
                <TouchableOpacity
                  onPress={() =>
                    launchImageLibrary(
                      { mediaType: 'photo' },
                      handleImageResponse
                    )
                  }
                  style={styles.profile}
                  >
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
                  <TouchableOpacity style={styles.profile} key={Math.random()}>
                    <Image
                      key={Math.random()}
                      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 150 }}
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
