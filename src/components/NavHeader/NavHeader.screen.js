import React from 'react'
import { View, TouchableOpacity } from 'react-native' 
import {Text} from '../Text'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useTheme } from '@react-navigation/native'
import styles from './NavHeader.style'
import { useNavigation } from '@react-navigation/native'
const CloseIcon = color => (
  <AntDesign color={color} name="close" size={24} color="#000" />
)
const BackIcon = color => (
  <MaterialIcons color={color} name="keyboard-backspace" size={24} />
)
const NavHeader = ({
  title,
  rightSection,
  leftSection,
  close,
  backIcon,
  leftSectionAction,
  rightSectionAction
}) => {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const RS = rightSection
  const LS = leftSection || <View />
  // const Close
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navCol}
        onPress={() => rightSectionAction || navigation.goBack()}>
        {rightSection ? (
          <RS />
        ) : close ? (
          <AntDesign color={colors.icons} name="close" size={24} />
        ) : backIcon ? <MaterialIcons name="arrow-back-ios"color={colors.icons}  size={21}/> : (
           <MaterialIcons
            color={colors.icons}
            name="keyboard-backspace"
            size={24}
          />
        )}
      </TouchableOpacity>

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
