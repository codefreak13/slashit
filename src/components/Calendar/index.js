import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker' 
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from '@react-navigation/native'

const index = ({ onDateChange, initialDate }) => {
	console.log(initialDate)
  const { colors } = useTheme()
  return (
    <CalendarPicker
      textStyle={{ color: colors.text }}
      onDateChange={()=>onDateChange}
      nextTitle={<AntDesign name="right" size={20} />}
      previousTitle={<AntDesign name="left" size={20} />}
      initialDate={new Date(initialDate)}
      showDayStragglers={true}
      selectedStartDate={new Date(initialDate)}
    />
  )
}

export default index
