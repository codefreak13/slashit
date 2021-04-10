import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './Profile.style'
import { Wrapper } from '../../components'
import { useTheme } from '@react-navigation/native'
const EditIcon = color => <EvilIcons color={color} name="pencil" size={24} />
const Profile = ({ navigation }) => {
  const { colors } = useTheme()
  const [profile, setProfile] = useState({
    name: 'Anna Appleseed',
    address: 'Main street, NYC',
    phone: '+23489787897789',
    email: 'turtle@gmail.com',
    supportEmail: 'support@turtle.com'
  })
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NavHeader
          backIcon
          leftSection={() => EditIcon(colors.icons)}
          leftSectionAction={() => navigation.navigate('EditProfile')}
          navigation={navigation}
        />

        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
          />
        </TouchableOpacity>

        <View>
          <View style={styles.list}>
            <Text style={styles.listData}>{profile.name}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>{profile.address}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>{profile.phone}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>{profile.email}</Text>
          </View>
          <View style={styles.list}>
            <Text style={styles.listData}>{profile.supportEmail}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Wrapper>
  )
}

export default Profile
