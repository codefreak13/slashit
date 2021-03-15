import React, { useState } from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity, Image } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import styles from './Profile.style'


const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name:'Anna Appleseed',
    address:'Main street, NYC',
    phone:'+23489787897789',
    email:'turtle@gmail.com',
  })
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} />


                <TouchableOpacity>
                  <Image
                    style={styles.profile}
                    source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
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

                </View>
            </SafeAreaView>

        </>
    )
}

export default Profile