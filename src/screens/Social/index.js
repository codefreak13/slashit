import React, { useState } from 'react'
import { 
  StatusBar, 
  View,
  TextInput, 
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import Button from '../../components/Button'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import {Wrapper, Text} from '../../components';
import {useTheme} from '@react-navigation/native'
import styles from './styles'
const index = ({ navigation }) => {
const {colors} = useTheme()
  const [username, setUsername] = useState('')

  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <NavHeader
        backIcon
        navigation={navigation}
        title="Accounts"
      />
      <View>
        <View style={styles.flexCenter}>
          <View style={[styles.flexCenter, { flex: 2 }]}>
            <AntDesign name="instagram" size={24} color={colors.primary} />
            <Text style={{ marginLeft: 20 }}>Instagram</Text>
          </View>
          <TextInput
            defaultValue="manage_access"
            placeholderTextColor={colors.placeHolderTextColor}
            value={username}
            onChangeText={text => setUsername(text)}
            style={{ flex: 2 }}
            placeholder="Enter your username"
          />
        </View>

        <View style={{ marginTop: 150 }}>
          <Text style={{ marginBottom: 20 }}>
            Go to{' '}
            <Text style={{ color: colors.primary }}>
              Apps and websites &gt; Tester Invites
            </Text>{' '}
            on your instagram profile and accept the invitation from Slashit
          </Text>
          <Button
            title="Contine to"
            onPress={() => navigation.navigate("InstagramPage", {
              uri: `https://www.instagram.com/${username ? username : 'manage_access'}/`
            })}
            containerStyle={{
              width: '70%',
              alignSelf: 'center',
              borderRadius: 50
            }}
          />
        </View>
      </View>
    </Wrapper>
  )
}

export default index
