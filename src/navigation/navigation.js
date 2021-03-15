import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import ManageCards from '../screens/ManageCards/ManageCards.screen';
import CustomDrawer from './drawer';
import SecurityStack from './securityStack';

import Avatar from '../assets/images/Avatar';
import { View } from 'react-native';
import Loop from '../assets/images/Loop';
import Cash from '../assets/images/Cash';
import Card from '../assets/images/Card';
import Lock from '../assets/images/Lock';
import Instagram from '../assets/images/Instagram';
import Moon from '../assets/images/Moon';
import HomeScreen from '../screens/Home/Home.screen';
import UpcomingRepaymentsScreen from '../screens/UpcomingRepayments/UpcomingRepayments.screen';
import TransactionsScreen from '../screens/Transactions/Transactions.screen';

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <Avatar/>
            ),
          }} />
        <Drawer.Screen name="Profile" component={Profile}
          options={{
            title: 'Profile',
            drawerIcon: ({focused, size}) => (
              <Avatar/>
            ),
          }} />
        <Drawer.Screen name="UpcomingRepayments" component={UpcomingRepaymentsScreen}
          options={{
            title: 'Upcoming Repayments',
            drawerIcon: ({focused, size}) => (
              <Loop/>
            ),
          }} />
        <Drawer.Screen name="Transactions" component={TransactionsScreen}
          options={{
            title: 'Transactions',
            drawerIcon: ({focused, size}) => (
              <Cash/>
            ),
          }} />
        <Drawer.Screen name="ManageCards" component={ManageCards}
          options={{
            title: 'Manage Cards',
            drawerIcon: ({focused, size}) => (
              <Card/>
            ),
          }} />
        <Drawer.Screen name="Security" component={SecurityStack}
          options={{
            title: 'Security',
            drawerIcon: ({focused, size}) => (
              <Lock/>
            ),
          }} />
        <Drawer.Screen name="Social" component={Home}
          options={{
            title: 'Social',
            drawerIcon: ({focused, size}) => (
              <Instagram/>
            ),
          }} />
        <Drawer.Screen name="DarkMode" component={Home}
          options={{
            title: 'Dark mode',
            drawerIcon: ({focused, size}) => (
              <Moon/>
            ),
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
