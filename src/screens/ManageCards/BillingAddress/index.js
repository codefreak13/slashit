import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BackIcon from '../../../assets/images/BackIcon'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'
import { useTheme } from '@react-navigation/native'
import { Text, Wrapper } from '../../../components'
const index = ({ navigation }) => {
  const { colors } = useTheme()
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />

      <NavHeader backIcon navigation={navigation} title="Billing Address" />
      <ScrollView>
        <View>
          <View style={styles.formControl}>
            <Text style={styles.formLabel}>Name on Card</Text>
            <View style={styles.formInputContainer}>
              <TextInput
                style={[styles.formInput, { height: 48 }]}
                placeholder="0000 0000 0000 0000"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <Text style={styles.formLabel}>Country</Text>

              <TextInput
                style={styles.formInput}
                placeholder="Nigeria"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput
                style={[styles.formInput, { height: 48 }]}
                placeholder="Street Address"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput
                style={[styles.formInput, { height: 48 }]}
                placeholder="City"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <Text style={styles.formLabel}>State</Text>

              <TextInput
                style={styles.formInput}
                placeholder="State"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput
                style={[styles.formInput, { height: 48 }]}
                placeholder="Post Code"
                placeholderTextColor={colors.placeHolderTextColor}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.addCardButton}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default index
