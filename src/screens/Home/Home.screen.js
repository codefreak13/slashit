import React, { useState,useEffect } from 'react'
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
import AsyncStorage from '@react-native-community/async-storage'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import CaptureArea from '../../assets/images/CaptureArea'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Button from '../../components/Button'
import Card from '../../components/Card/Card.screen'
import Dots from '../../components/dots'
import PayModal from './payModal'
import PinModal from './pinModal'
import SuccessModal from '../../components/SuccessModal'
import LButton from '../../components/LinearGradientButton'

import { getStoredState } from 'redux-persist'
const Home = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('in_3')
  const [image, setImage] = useState('')
  const [modals, setModals] = useState({
    showPayModal: false,
    showPinModal: false,
    showSuccessModal: false
  })
  const { showPayModal, showPinModal, showSuccessModal } = modals
  const handleImageResponse = async data => {
    console.log('The data', data)
    try{
      const image = await AsyncStorage.setItem('image', data.uri)
      image !== null || image !== undefined ? setImage(data.uri) : null
    }catch(e){
      console.log(e, 'error')
    }
    
  }

  const handleTabChange = data => {
    setCurrentTab(data)
  }
  const togglePayModal = () =>
    setModals({ ...modals, showPayModal: !showPayModal })
  const togglePinModal = () =>
    setModals({ ...modals, showPinModal: !showPinModal })
    const toggleSuccesModal = () => setModals({ ...modals, showSuccessModal: !showSuccessModal })
  const openCloseModalOpenPinModal = () =>
    setModals({
      ...modals,
      showPayModal: !showPayModal,
      showPinModal: !showPinModal
    })
  const onClosePinModalOpenSuccessModal = () =>
    setModals({
      ...modals,
      showPinModal: !showPinModal,
      showSuccessModal: !showSuccessModal
    })
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
          <PayModal
            visible={modals.showPayModal}
            openCloseModalOpenPinModal={openCloseModalOpenPinModal}
            setModal={togglePayModal}
          />
          <PinModal
            visible={modals.showPinModal}
            onClosePinModalOpenSuccessModal={onClosePinModalOpenSuccessModal}
            setModal={togglePinModal}
          />
          <SuccessModal setModal={toggleSuccesModal} visible={modals.showSuccessModal} />
        </View>
      )
    },
    {
      id: 'with_card',
      title: 'Pay with card',
      data: (
        <View style={[styles.captureIcon]}>
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
  const getImage = async () => {
    try {
      const image = await AsyncStorage.getItem('image')
      console.log(image)
      setImage(image)
    }catch(e){
      console.log(e, 'error')
    }
  }
useEffect(()=>{
 getImage()
}, [])
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
                {
                  image ? <Image
                  style={styles.profile}
                  source={{
                    uri: image
                  }}
                /> : <Image
                style={styles.profile}
                source={require('../../assets/images/visa.jpeg')}
              />
                }
              
            </TouchableOpacity>
          </View>
          <View
            style={styles.scrollContent}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            >
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
          </View>

          {availbaleTabs.filter(x => x.id == currentTab)[0].data}
        </SafeAreaView>
      </View>
    </>
  )
}

export default Home
