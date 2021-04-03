import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BackIcon from '../../../assets/images/BackIcon'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import { Wrapper } from '../../../components'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import PayOverSixWeeks from './PayOverSixWeeks'
import PayInThreeMonths from './PayInThreeMonths'
import styles from './styles'

const Tab = createMaterialTopTabNavigator()
const index = ({ navigation }) => {
  return (
    <Wrapper>
      <NavHeader
        rightSection={BackIcon}
        navigation={navigation}
        title="Payment Schedule"
      />
      <StatusBar barStyle="dark-content" />
        <Tab.Navigator swipeEnabled={false} tabBarOptions={{
          tabStyle: {
            backgroundColor: '#eee'
          },
          indicatorStyle: {
            backgroundColor: '#000'
          },
          labelStyle: {
            textTransform: 'capitalize'
          }
        }}>
          <Tab.Screen name="Pay Over 6 Weeks" component={PayOverSixWeeks} />
          <Tab.Screen name="Pay in 3 Months" component={PayInThreeMonths} />
        </Tab.Navigator>  
      {/* <Calendar
        current={'2020-02-02'}
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          '2020-02-02': {
            marked: true,
            selected: true,
            selectedColor: '#000',
            activeOpacity: 0
          }
        }}
      /> */}
    </Wrapper>
  )
}

export default index
