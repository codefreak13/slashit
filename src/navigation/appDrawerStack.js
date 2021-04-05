import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer' 
import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useTheme } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 
import Profile from './profileStack'
import ManageCards from './manageCardsStack'
import CustomDrawer from './drawer'
import SecurityStack from './securityStack'
import { createStackNavigator } from '@react-navigation/stack' 
import HomeScreen from './homeStack'
import UpcomingRepaymentsScreen from './upcomingRequestStack'
import TransactionsScreen from './transactionsStack'
import Social from './socialStack' 
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const AppNavigation = () => {
  const { colors } = useTheme() 
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={24} color={colors.text} style={{ marginLeft: 10 }} />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ focused, size }) => (
            <EvilIcons name="user" size={34} color={colors.text} style={{marginLeft: 6}} />
          )
        }}
      />
      <Drawer.Screen
        name="UpcomingRepayments"
        component={UpcomingRepaymentsScreen}
        options={{
          title: 'Upcoming Repayments',
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="sync" size={22} color={colors.text} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          title: 'Transactions',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="cash-multiple" color={colors.text} size={25} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="ManageCards"
        component={ManageCards}
        options={{
          title: 'Manage Cards',
          drawerIcon: ({ focused, size }) => (
            <EvilIcons name="credit-card" size={28} color={colors.text} style={{marginLeft: 12}}/>
          )
        }}
      />
      <Drawer.Screen
        name="Security"
        component={SecurityStack}
        options={{
          title: 'Security',
          drawerIcon: ({ focused, size }) => (
            <AntDesign name="lock" size={25} color={colors.text} style={{marginLeft: 12}}/>
          )
        }}
      />
       <Drawer.Screen
        name="Social"
        component={Social}
        options={{
          drawerIcon: ({ focused, size }) => (
            <AntDesign
            name="instagram" size={25} color={colors.text} style={{marginLeft: 12}}/>
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default AppNavigation
