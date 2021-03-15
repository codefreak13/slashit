import React from 'react'
import {View, Text, StyleSheet } from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Icon3 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePictureContainer}>
              <Icon3
                name="user"
                size={30}
                color={'#ffffff'}
              />
            </View>
            <Text style={styles.profileText}>Anna Appleseed</Text>
            <Text style={styles.profileText}>1027883</Text>
          </View>
    
          <DrawerItemList {...props} />
    
          <View style={styles.footer}>
            <Text>Credit limit NGN 4000</Text>
          </View>
        </DrawerContentScrollView>
      );
}

const styles = StyleSheet.create({
    profileContainer: {
      minHeight:150,
      alignItems:'center',
      justifyContent:'center'
    },
    profilePictureContainer: {
      height:69,
      width:69,
      borderRadius:100,
      backgroundColor:'#E0E0E0',
      justifyContent: 'center',
      alignItems: 'center'
    },
    profileText: {
      marginTop:10
    },
    listIcon: {
      backgroundColor:'green',
      height: 24,
      width:24
    },
    footer: {
      borderTopWidth: 2,
      marginTop: 100,
      alignItems:'center',
      padding:20
    }
  })

export default CustomDrawer;