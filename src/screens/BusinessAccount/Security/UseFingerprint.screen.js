import React, { useState } from 'react'
import { SafeAreaView, StatusBar, View, Switch } from 'react-native'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './Security.style'
import { Text, Wrapper } from '../../../components'

const List = ({ text, value, onValueChange }) => (
  <View style={styles.list}>
    <Text style={styles.listItem}>{text}</Text>
    <Switch onValueChange={onValueChange} value={value} />
  </View>
)

const UseFingerprint = ({ navigation }) => {
  const [switchValue, setswitchValue] = useState(false)
  const [switchValue1, setswitchValue1] = useState(false)
  const toggleSwitch = value => {
    setswitchValue(previousState => !previousState)
  }
  const toggleSwitch1 = value => {
    setswitchValue1(previousState => !previousState)
  }
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          backIcon
          navigation={navigation}
          title="Use Fingerprint to"
        />

        <View>
          <List
            value={switchValue}
            onValueChange={toggleSwitch}
            text="Log in to your account"
          />
          <List
            value={switchValue1}
            onValueChange={toggleSwitch1}
            text="Approve payments"
          />
        </View>
      </SafeAreaView>
    </Wrapper>
  )
}

export default UseFingerprint
