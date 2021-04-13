import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {   Text } from '../../../components'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'
const index = ({navigation}) => {
  const { colors } = useTheme()
  const result = 99
  return ( 
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, height: 48 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialCommunityIcons name="menu" size={26} color={colors.icons} />
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Nike Store</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Orders')
          }
          style={styles.touchStyles}>
          <View style={[styles.cartCounter, {backgroundColor: colors.primary}]}> 
            <Text style={{ color: '#fff', fontSize: 10 }}>
              {result === null ? 0 : result >= 100 ? <Text>99+</Text> : result}
            </Text>
          </View>
          <FontAwesome name="bell-o" size={20} color={colors.icons} />
        </TouchableOpacity>
      </View> 
  )
}

export default index
