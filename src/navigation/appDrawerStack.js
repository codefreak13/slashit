import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home/Home.screen'
import Profile from './profileStack'
import ManageCards from './manageCardsStack'
import CustomDrawer from './drawer'
import SecurityStack from './securityStack'
import { createStackNavigator } from '@react-navigation/stack'
import Avatar from '../assets/images/Avatar'
import { View } from 'react-native'
import Loop from '../assets/images/Loop'
import Cash from '../assets/images/Cash'
import Card from '../assets/images/Card'
import Lock from '../assets/images/Lock'
import Instagram from '../assets/images/Instagram'
import Moon from '../assets/images/Moon'
import HomeScreen from './homeStack'
import UpcomingRepaymentsScreen from './upcomingRequestStack'
import TransactionsScreen from './transactionsStack'
import Social from './socialStack'
import AuthStack from './authStack'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const AppNavigation = () => {
  const user = true
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={24} style={{ marginLeft: 10 }} />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ focused, size }) => (
            <EvilIcons name="user" size={34} style={{marginLeft: 6}} />
          )
        }}
      />
      <Drawer.Screen
        name="UpcomingRepayments"
        component={UpcomingRepaymentsScreen}
        options={{
          title: 'Upcoming Repayments',
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="sync" size={22} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          title: 'Transactions',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="cash-multiple" size={25} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="ManageCards"
        component={ManageCards}
        options={{
          title: 'Manage Cards',
          drawerIcon: ({ focused, size }) => (
            <EvilIcons name="credit-card" size={28} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="Security"
        component={SecurityStack}
        options={{
          title: 'Security',
          drawerIcon: ({ focused, size }) => (
            <Entypo name="lock" size={25} style={{marginLeft: 12}}/>
          )
        }}
      />
       <Drawer.Screen
        name="Social"
        component={Social}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
            name="instagram" size={25} style={{marginLeft: 12}}/>
          )
        }}
      />
       <Drawer.Screen
        name="DarkMode"
        component={Home}
        options={{
          title: 'Dark Mode',
          drawerIcon: ({ focused, size }) => (
            <Entypo
            name="moon" size={25} style={{marginLeft: 12}}/>
          )
        }}
      /> 
    </Drawer.Navigator>
  )
}

export default AppNavigation
