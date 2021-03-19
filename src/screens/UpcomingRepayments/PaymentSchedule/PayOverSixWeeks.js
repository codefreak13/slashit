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

const index = ({ navigation }) => {
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
          onDateChange={setFirstInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
        />
      )
    },
    {
      title: 'Second Installment',
      calendar: (
        <CalendarPicker
          onDateChange={setSecondInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
        />
      )
    },
    {
      title: 'Third Installment',
      calendar: (
        <CalendarPicker
          onDateChange={setThirdInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
        />
      )
    },
    {
      title: 'Final Installment',
      calendar: (
        <CalendarPicker
          onDateChange={setFinalInstallment}
          nextTitle={<AntDesign name="right" size={20} />}
          previousTitle={<AntDesign name="left" size={20} />}
        />
      )
    }
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