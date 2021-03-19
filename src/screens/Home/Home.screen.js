import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import CaptureArea from '../../assets/images/CaptureArea'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useEffect } from 'react'
import Card from '../../components/Card/Card.screen'

const Home = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('in_3')

  const handleImageResponse = data => {
    console.log('The data', data)
  }

  const handleTabChange = data => {
    setCurrentTab(data)
  }

  const availbaleTabs = [
    {
      id: 'in_3',
      title: 'Pay in 3',
      data: <CaptureArea />
    },
    {
      id: 'in_4',
      title: 'Pay in 4',
      data: <CaptureArea />
    },
    {
      id: 'with_card',
      title: 'Pay with card',
      data: (
        <View style={styles.cardHolder}>
          <Card />
        </View>
      )
    }
  ]

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.capture}>
        <SafeAreaView>
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={30} color={'#ffffff'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                launchImageLibrary({ mediaType: 'photo' }, handleImageResponse)
              }>
              <Image
                style={styles.profile}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {availbaleTabs.map((tab, key) => (
              <TouchableOpacity
                key={key}
                style={styles.scrollButton}
                onPress={() => handleTabChange(tab.id)}>
                <Text style={styles.scrollText}>{tab.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.captureIcon}>
            {availbaleTabs.filter(x => x.id == currentTab)[0].data}
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

export default Home
