import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import BackIcon from '../../assets/images/BackIcon'
import styles from './NavHeader.style'
import {useNavigation} from "@react-navigation/native";
const NavHeader = ({ title, rightSection, leftSection, leftSectionAction }) => {
  const navigation = useNavigation();
  const RS = rightSection || <View />
  const LS = leftSection || <View />

  return (
    <View style={styles.navContainer}>
      <View style={styles.navCol}>
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          onPress={() => navigation.goBack()}>
          <View>
           {<BackIcon /> ||<RS />} 
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.navCol, styles.navTitle]}>
        <Text style={styles.navTitleText}>{title}</Text>
      </View>

      <View
        style={[styles.navCol, { alignItems: 'flex-end', paddingRight: 15 }]}>
        {leftSection ? (
          <TouchableOpacity onPress={leftSectionAction}>
            <LS />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

export default NavHeader
