import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../context/authContext';
const CustomDrawer = props => {
  const navigation = props.navigation
  const result = 32
  const {signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', { screen: 'Notifications' })
          }
          style={styles.touchStyles}>
          <View style={styles.icons}>
            <Ionicons name="ios-notifications" size={25} color="white" />
            <Text style={styles.cartCounter}>
              {result === null ? 0 : result >= 100 ? <Text>99+</Text> : result}
            </Text>
          </View>
          <FontAwesome name="bell-o" size={20} color={'#000'} />
        </TouchableOpacity>

        <View style={styles.profilePictureContainer}>
          <Icon3 name="user" size={30} color={'#ffffff'} />
        </View>
        <Text style={styles.profileText}>Anna Appleseed</Text>
        <Text style={styles.profileText}>1027883</Text>
      </View>

      <DrawerItemList {...props} />

      <View style={styles.footer}>
        <Text>Credit limit NGN 4000</Text>
        <TouchableOpacity onPress={signOut}  style={{marginTop:15}}>
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    minHeight: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePictureContainer: {
    height: 69,
    width: 69,
    borderRadius: 100,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    marginTop: 10
  },
  listIcon: {
    backgroundColor: 'green',
    height: 24,
    width: 24
  },
  footer: {
    borderTopWidth: 2,
    marginTop: 100,
    alignItems: 'center',
    padding: 20
  },
  cartCounter: {
    color: 'white',
    backgroundColor: '#673AB7',
    width: 20,
    padding: 0,
    margin: 0,
    height: 20,
    top: 13,
    left: -11,
    borderRadius: 100,
    textAlign: 'center',
    fontSize: 10,
    padding: 3,
    marginRight: 8
  },
  touchStyles: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginRight: 10,
    top: -20,
    right: -10
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomDrawer
