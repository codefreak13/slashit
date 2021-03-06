import React, { useState,useEffect } from 'react'
import {
  SafeAreaView,
  View, 
  StatusBar,
  TouchableOpacity,
  Alert,
  useColorScheme,
  Appearance,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import {Text, LinearWrapper} from '../../components/'
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
import { useTheme } from '@react-navigation/native'


const Home = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('in_3')
  const [image, setImage] = useState('')
  const [modals, setModals] = useState({
    showPayModal: false,
    showPinModal: false,
    showSuccessModal: false
  })
  const { showPayModal, showPinModal, showSuccessModal } = modals
  const { colors } = useTheme()

  const handleTabChange = data => {
    const item = availbaleTabs.filter(item => item.id === data);
    console.log(item)
    const g = availbaleTabs.splice(2,0,item);
    console.log(g.length, 'll')
    // console.log(data)
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
        <TouchableOpacity onPress={()=>navigation.navigate("Scanner")} style={{...styles.captureIcon, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ borderWidth: 2, borderColor: '#fff',width: '80%',borderRadius: 6, height: '90%', }}></View>
          <Text style={{color: '#fff', marginTop: 5, fontSize: 18}}>Scan QR code to checkout</Text>
        </TouchableOpacity>
      )
    },
    {
      id: 'in_4',
      title: 'Pay in 4',
      data: (
        <>
          <TouchableOpacity onPress={() => togglePayModal()} style={{...styles.captureIcon, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ borderWidth: 2, borderColor: '#fff',width: '80%',borderRadius: 6, height: '90%', }}></View>
            <Text style={{color: '#fff', marginTop: 5, fontSize: 18}}>Scan QR code to checkout</Text>
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
         </>
        ) 
    },
    {
      id: 'with_card',
      title: 'Pay with card',
      data: (
        <View style={[styles.captureIcon]}>
          <Text style={{...styles.payWith, color: '#fff'}}>Pay with 5342****56732</Text>
          <View style={styles.cardHolder}>
            <Card />
          </View>
          <Dots second /> 
             <LButton
             width="50%"
             alignSelf='center'
          colors={ ['#673AB7' , '#851B97', ]}
          borderRadius
            containerStyle={styles.btn}
            title="Pay with"
            onPress={() => handleTabChange('in_4')}
          /> 
         
        </View>
      )
    }
  ]

  const handleImageResponse = async data => {
    try{
      const image = await AsyncStorage.setItem('image', data.uri)
      image !== null || image !== undefined ? setImage(data.uri) : null
    }catch(e){
      console.log(e, 'error')
    }
    
  }
  const getImage = async () => {
    try {
      const image = await AsyncStorage.getItem('image')
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
      <LinearWrapper style={[styles.capture]}>
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
      </LinearWrapper>
    </>
  )
}

export default Home
