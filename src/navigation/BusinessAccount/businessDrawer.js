import React, {useContext} from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import {AuthContext} from '../../context/authContext';
import {ColorContext} from '../../context/colorContext';
import {Text} from '../../components'
import { useTheme } from '@react-navigation/native'
const CustomDrawer = props => {
  const { colors } = useTheme() 
  const {isDark, shuffle} = useContext(ColorContext);
  const navigation = props.navigation
  const result = 32
  const {signOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}> 
        <View style={styles.profilePictureContainer}>
          <Icon3 name="user" size={30} color={'#ffffff'} />
        </View> 
      </View>

      <DrawerItemList {...props} />

      <View style={styles.footer}>
        {/* <TouchableOpacity onPress={()=> shuffle()} style={{width: '90%', flexDirection: 'row',  }}>
          <Text style={{ marginLeft: 5, color: '#999'}}>Dark Mode</Text>
        </TouchableOpacity> */}
         
        <TouchableOpacity onPress={signOut}  style={{width: '90%', flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ marginLeft: 5, color: '#999'}}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    minHeight: 100,
    marginVertical: 7,
    // alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 15
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
    // borderTopWidth: 2,
    // marginTop: 20,
    alignItems: 'center',
    // paddingHorizontal: 20,
    // backgroundColor: 'red'
  },
  cartCounter: {
    color: 'white',
    backgroundColor: '#673AB7',
    width: 20,
    padding: 0,
    margin: 0,
    height: 20,
    top: 13,
    left: 11,
    borderRadius: 150,
    textAlign: 'center',
    fontSize: 10,
    padding: 3,
    marginRight: 8
  },
  touchStyles: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginRight: 10,
    top: -10,
    right: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomDrawer
