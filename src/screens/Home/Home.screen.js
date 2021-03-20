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
import LinearGradient from 'react-native-linear-gradient'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import CaptureArea from '../../assets/images/CaptureArea'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useEffect } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card/Card.screen'
import Dots from '../../components/dots'
import PayModal from './payModal'
import PinModal from './pinModal'
import LButton from '../../components/LinearGradientButton'
import { getStoredState } from 'redux-persist'
const Home = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('in_3')
  const [modals, setModals] = useState({
    showPayModal: false,
    showPinModal: false
  })
  const { showPayModal, showPinModal } = modals
  const handleImageResponse = data => {
    console.log('The data', data)
  }

  const handleTabChange = data => {
    setCurrentTab(data)
  }
  const togglePayModal = () =>
    setModals({ ...modals, showPayModal: !showPayModal })
  const togglePinModal = () =>
    setModals({ ...modals, showPinModal: !showPinModal })
  const openCloseModalOpenPinModal = () => setModals({ ...modals,showPayModal: !showPayModal, showPinModal: !showPinModal })
  const availbaleTabs = [
    {
      id: 'in_3',
      title: 'Pay in 3',
      data: (
        <View style={styles.captureIcon}>
          <CaptureArea />
        </View>
      )
    },
    {
      id: 'in_4',
      title: 'Pay in 4',
      data: (
        <View style={[styles.captureIcon]}>
          <TouchableOpacity onPress={() => togglePayModal()}>
            <CaptureArea />
          </TouchableOpacity>
          <PayModal visible={modals.showPayModal} openCloseModalOpenPinModal={openCloseModalOpenPinModal} setModal={togglePayModal} />
          <PinModal visible={modals.showPinModal} setModal={togglePinModal} />
        </View>
      )
    },
    {
      id: 'with_card',
      title: 'Pay with card',
      data: (
        <View style={[styles.captureIcon, { marginTop: 0 }]}>
          <Text style={styles.payWith}>Pay with 5342****56732</Text>
          <View style={styles.cardHolder}>
            <Card />
          </View>
          <Dots second />
          <LButton
            containerStyle={styles.btn}
            title="Continue"
            onPress={() => handleTabChange('in_4')}
          />
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
              <LinearGradient
                key={key}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                colors={['#851B97', '#673AB7']}
                style={styles.scrollButton}>
                <TouchableOpacity onPress={() => handleTabChange(tab.id)}>
                  <Text style={styles.scrollText}>{tab.title}</Text>
                </TouchableOpacity>
              </LinearGradient>
            ))}
          </ScrollView>

          {availbaleTabs.filter(x => x.id == currentTab)[0].data}
        </SafeAreaView>
      </View>
    </>
  )
}

export default Home
