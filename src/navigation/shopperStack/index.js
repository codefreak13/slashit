import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack' 
import HomeScreen from '../homeStack'
import DrawerStack from '../appDrawerStack'
const Stack = createStackNavigator()


const index = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" headerMode='none'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        </Stack.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})
