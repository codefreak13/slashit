import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import Carousel from 'react-native-snap-carousel'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useTheme} from '@react-navigation/native' 
const index = ({ navigation }) => {
  const {colors} = useTheme()
  const [state, setState] = useState({
    firstInstallment: null,
    secondInstallment: null,
    thirdInstallment: null,
    finalInstallment: null
  })
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const setFirstInstallment = date => {
    setState({ ...state, firstInstallment: date })
  }
  const setSecondInstallment = date => {
    setState({ ...state, secondInstallment: date })
  }
  const setThirdInstallment = date => {
    setState({ ...state, thirdInstallment: date })
  }
  const setFinalInstallment = date => {
    setState({ ...state, finalInstallment: date })
  }
  const data = [
    {
      title: 'First Installment',
      calendar: (
        <CalendarPicker
        textStyle={{color:colors.text}}
          onDateChange={setFirstInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
          initialDate={new Date(2021,8,8)}
          showDayStragglers={true}
          selectedStartDate={new Date(2021,8,8)}
        />
      )
    },
    {
      title: 'Second Installment',
      calendar: (
        <CalendarPicker
        textStyle={{color:colors.text}}
          onDateChange={setFirstInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
          initialDate={new Date(2021,9,9)}
          showDayStragglers={true}
          selectedStartDate={new Date(2021,9,9)}
        />
      )
    },
    {
      title: 'Third Installment',
      calendar: (
        <CalendarPicker
        textStyle={{color:colors.text}}
          onDateChange={setFirstInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
          initialDate={new Date(2021,10,10)}
          showDayStragglers={true}
          selectedStartDate={new Date(2021,10,10)}
        />
      )
    },
  ]
  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            textAlign: 'center',
            marginBottom: 15
          }}>
          {item.title}
        </Text>
        <View>
        {item.calendar}
        <View style={{backgroundColor: 'red', alignSelf: 'center'}}></View>
        </View>
        {/* <Text style={{ 
            color: '#000',
            textAlign: 'center', 
          }}>kkk</Text> */}
     
      </TouchableOpacity>
    )
  }
  const startDate = selectedStartDate ? selectedStartDate.toString() : ''
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ alignItems: 'center' }}>
          <Carousel
            data={data}
            renderItem={(item, index) => _renderItem(item, index)}
            sliderWidth={450}
            itemWidth={450}
          /> 
        </View>
      </SafeAreaView>
    </>
  )
}

export default index
