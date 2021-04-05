import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar, 
  View,
  TouchableOpacity, 
  TextInput
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Card from '../../components/Card/Card.screen'
import Modal from '../../components/Modal/Modal.screen'
import NavHeader from '../../components/NavHeader/NavHeader.screen'
import styles from './ManageCards.style'
import {Text, Wrapper} from '../../components'
import { useTheme } from '@react-navigation/native'
const ManageCards = ({ navigation }) => {
  const [visible, setVisble] = useState(false)

  const showModal = () => setVisble(true)
  const hideModal = () => setVisble(false)
const {colors} = useTheme()
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" /> 
        <NavHeader close navigation={navigation} title="Manage Cards" />
        <View style={styles.cardContainer}>
          <Card />
        </View>
        <View style={styles.topBtnContainer}>
          <TouchableOpacity style={styles.btn}>
            <View>
              <Text style={styles.btnText}>Set as preferred</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('AddNewCard')}>
            <View>
              <Text style={styles.btnText}>Add a new card</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.delBtnContainer}>
          <TouchableOpacity style={styles.btn}>
            <View>
              <Text style={styles.btnText}>Delete this card</Text>
            </View>
          </TouchableOpacity>
        </View> 
    </Wrapper>
  )
}

export default ManageCards
