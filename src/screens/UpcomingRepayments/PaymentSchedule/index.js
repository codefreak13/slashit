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
import PayOverSixWeeks from './PayOverSixWeeks'
import PayInThreeMonths from './PayInThreeMonths';
import styles from './styles'

const Tab = createMaterialTopTabNavigator()
const index = ({ navigation }) => {
  return (
    <>
      <NavHeader
        rightSection={BackIcon}
        navigation={navigation}
        title="Payment Schedule"
      />
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView style={styles.container}> */}
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
      {/* </SafeAreaView> */}
    </>
  )
}

export default index
