import React, { useState } from 'react'
import { useEffect } from 'react'
import { Image, Share, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, Wrapper } from '../../../components'
import { useNavigation, useTheme } from '@react-navigation/native'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const IMAGE_SIZE = 70
const index = ({ route, navigation, data, navigateTo }) => {
  console.log(route.params.status)
  const { colors } = useTheme()
  const handleOp = () =>
    route.params.status === 'pending' ? onShare() : navigation.navigate('CreateOrder')

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share Order'
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  const LS = color =>
    route.params.status === 'pending' ? (
      <Entypo color={color} name="share" size={24} />
    ) : (
      <Text style={{ fontWeight: 'bold' }}>Edit</Text>
    )
  return (
    <Wrapper onPress={() => navigation.navigate(navigateTo)}>
      <NavHeader
        backIcon
        leftSection={() => LS(colors.icons)}
        leftSectionAction={() => handleOp()}
        navigation={navigation}
        title="Order #32456777"
      />
      <View style={[styles.top, { backgroundColor: '#99999932' }]}>
        <Text style={styles.boldText}>NGN 4,000.00</Text>
        <Text style={styles.boldText}>Nike Store</Text>
        <Text>Created Jun 13, 2020 5:38 PM</Text>
        <Text>Customer Id 340192</Text>
        <Text>turtleapp@gmail.com</Text>
      </View>

      <View
        style={{ alignItems: 'center', justifyContent: 'center' }}
        key={Math.random()}>
        {route.params.status === 'completed' ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderCreated')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <MaterialCommunityIcons
              name="content-copy"
              size={24}
              color={colors.icons}
            />
            <Text>Make a copy</Text>
          </TouchableOpacity>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('Images')}>
          <Image
            key={Math.random()}
            style={styles.profile}
            source={require('../../../assets/images/profile.jpeg')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.top,
          { backgroundColor: '#99999932', alignItems: 'flex-start' }
        ]}>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Product Name</Text>
          <Text>Red Roses</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Description</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text>Red Roses</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Total</Text>
          <Text>#4,000.00</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Shipping address</Text>
          <Text>20 main street</Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.boldText}>Customer Email</Text>
          <Text>customer@email.com</Text>
        </View>
      </View>
      <Text
        style={{
          color: route.params.status === 'completed' ? 'green' : '#888',
          textAlign: 'center',
          textTransform: 'capitalize'
        }}>
        {route.params.status}
      </Text>
    </Wrapper>
  )
}

export default index

const styles = StyleSheet.create({
  top: {
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 7
  },
  boldText: { fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  profile: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 114,
    borderWidth: 0.3,
    resizeMode: 'contain'
    // marginRight: 10
  }
})
