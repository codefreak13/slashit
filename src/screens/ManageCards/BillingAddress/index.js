import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput, 
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons' 
import BackIcon from '../../../assets/images/BackIcon'; 
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './styles'

const index = ({ navigation }) => { 

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <NavHeader
        rightSection={BackIcon}
        navigation={navigation}
        title="Billing Address"
      />
      <ScrollView>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}> 

          <View style={styles.formControl}>
          <Text style={styles.formLabel}>Name on Card</Text>
            <View style={styles.formInputContainer}>
              <TextInput
                style={[styles.formInput, {height: 48}]}
                placeholder="0000 0000 0000 0000"
              />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <Text style={styles.formLabel}>Country</Text>

              <TextInput style={styles.formInput} placeholder="Nigeria" />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput style={[styles.formInput, {height: 48}]} placeholder="Street Address" />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput style={[styles.formInput, {height: 48}]} placeholder="City" />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <Text style={styles.formLabel}>State</Text>

              <TextInput style={styles.formInput} placeholder="State" />
            </View>
          </View>

          <View style={styles.formControl}>
            <View style={styles.formInputContainer}>
              <TextInput style={[styles.formInput, {height: 48}]} placeholder="Post Code" />
            </View>
          </View>

          <TouchableOpacity style={styles.addCardButton}>
            <Text style={{ color: '#fff' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index
