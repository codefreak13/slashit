import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer' 
import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useTheme } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 
import HomeScreen from './businessHomeStack'
import YourQrCode from './YourQrCodeStack'
import Orders from './OrdersStack'
import TransferToBank from './transferToBankstack'
import Transactions from './transactionsStack'
import Security from './SecurityStack'
import Profile from './profileStack' 

import CustomDrawer from './businessDrawer' 
import { createStackNavigator } from '@react-navigation/stack'   
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const BusinessDrawerNavigator = () => {
  const { colors } = useTheme() 
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen} 
      />
     
      <Drawer.Screen
        name="YourQrCode"
        component={YourQrCode}
        options={{
          title: 'Your Qr Code', 
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
      />
      <Drawer.Screen
        name="TransferToBank"
        component={TransferToBank}
        options={{
          title: 'Transfer To Bank', 
        }}
      />

    <Drawer.Screen
        name="Transactions"
        component={Transactions}
      />
      <Drawer.Screen
        name="Security"
        component={Security} 
      />
       
       <Drawer.Screen
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>
  )
}

export default BusinessDrawerNavigator
