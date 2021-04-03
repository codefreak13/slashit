import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import BackIcon from '../../assets/images/BackIcon'
import styles from './NavHeader.style'
import { useNavigation } from '@react-navigation/native'
const CloseIcon = () => <AntDesign name="close" size={24} color="#000" />
const BackIcon = () => <MaterialIcons name="keyboard-backspace" size={24} />
const NavHeader = ({
  title,
  rightSection,
  leftSection,
  close,
  leftSectionAction,
  rightSectionAction
}) => {
  const navigation = useNavigation()
  const RS = rightSection
  const LS = leftSection || <View />
  // const Close 
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.navCol}
        onPress={() => rightSectionAction || navigation.goBack()}>
        {rightSection ? (<RS />)  : (close ? <CloseIcon />: <BackIcon />)}
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
