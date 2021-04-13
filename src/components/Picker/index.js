import React from 'react'
import { StyleSheet, View, Platform} from 'react-native'
// import { Picker as RNPicker } from '@react-native-picker/picker'
import RNPickerSelect from 'react-native-picker-select'
import propTypes from 'prop-types'

const checkLabel = item => {
  let label
  if (item.country) {
    label = item.country
  } else {
    label = item.label
  }
  return label
}

const checkValue = item => {
  let value
  if (item.country) {
    value = item.country
  } else {
    value = item.country
  }
  return value
}
const Picker = ({
  PickerData,
  placeholder,
  pickerStyle,
  pickerContainerStyle,
  onValueChange,
  selectedValue,
  ...otherProps
}) => {
  const PickerItem = PickerData.map(item => {
    const label = checkLabel(item)
    const value = checkValue(item)
    return {  label,  value }
  })
  return (
    <View style={{ ...styles.pickerContainerView, ...pickerContainerStyle }}>
      <RNPickerSelect
         placeholder={placeholder}
        onValueChange={value => onValueChange(value)}
        items={PickerItem}
        style={{...pickerSelectStyles}}
      />
    </View>
  )
}
export default Picker
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 20,
    paddingRight: 30,
    lineHeight: 17,
    fontFamily: 'Helvetica Neue',
    color: '#323232',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginLeft:17,
  },
  inputAndroid: {color: "#323232",  marginLeft:5,},
  iconContainer: {
    marginVertical: 25,
  },
  placeholder: {
    color: '#323232',
    fontSize: 14,
    lineHeight: 17,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
})
const styles = StyleSheet.create({
  pickerContainerView: {
   
    // marginBottom: 5,
    // height: 52,
    // backgroundColor: 'red',
    // borderRadius: 15,
    // paddingHorizontal: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 0.6,  
    borderColor: '#757575',
    // height: 48,
    // width: '100%',
  },
  pickerStyle: {
    width: '100%',
    borderRadius: 3,
    height: '100%'
  },
  inputIOS: {
    fontSize: 34,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'red',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})

Picker.propTypes = {
  placeholder: propTypes.string,
  selectedValue: propTypes.string.isRequired,
  onValueChange: propTypes.func.isRequired,
  pickerContainerView: propTypes.object,
  PickerOptions: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.oneOfType([propTypes.string, propTypes.number])
    })
  ).isRequired
} 