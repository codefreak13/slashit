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
import PayOverSixWeeks from './PayOverSixWeeks'
import PayInThreeMonths from './PayInThreeMonths'
import {useTheme} from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator()
const index = ({ navigation }) => {
  const {colors} = useTheme()
  return (
    <Wrapper>
      <NavHeader
        backIcon
        navigation={navigation}
        title="Payment Schedule"
      />
      <StatusBar barStyle="dark-content" />
        <Tab.Navigator swipeEnabled={false} tabBarOptions={{
          tabStyle: {
            backgroundColor: colors.card
          },
          indicatorStyle: {
            backgroundColor: colors.customCard
          },
          labelStyle: {
            textTransform: 'capitalize',
            color: colors.text
          }
        }}>
          <Tab.Screen name="Pay Over 6 Weeks" component={PayOverSixWeeks} />
          <Tab.Screen name="Pay in 3 Months" component={PayInThreeMonths} />
        </Tab.Navigator>  
      
    </Wrapper>
  )
}

export default index
