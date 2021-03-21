import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  Linking
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BackIcon from '../../assets/images/BackIcon'
import Button from '../../components/Button'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './styles'
const index = ({ navigation }) => {
  const [username, setUsername] = useState('')

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        rightSection={BackIcon}
        navigation={navigation}
        title="Accounts"
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.flexCenter}>
          <View style={[styles.flexCenter, { flex: 2 }]}>
            <AntDesign name="instagram" size={24} color="#6262b7" />
            <Text style={{ marginLeft: 20 }}>Instagram</Text>
          </View>
          <TextInput
            defaultValue="talk2dera"
            value={username}
            onChangeText={text => setUsername(text)}
            style={{ flex: 2 }}
            placeholder="Enter your username"
          />
        </View>

        <View style={{ marginTop: 150 }}>
          <Text style={{ marginBottom: 20 }}>
            Go to{' '}
            <Text style={{ color: '#6262b7' }}>
              Apps and websites &gt; Tester Invites
            </Text>{' '}
            on your instagram profile and accept the invitation from Slashit
          </Text>
          <Button
            title="Contine to"
            onPress={() =>
              Linking.openURL(`https://www.instagram.com/${username}/`)
            }
            containerStyle={{
              width: '70%',
              alignSelf: 'center',
              borderRadius: 50
            }}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

export default index
