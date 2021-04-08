import React, { useState } from 'react'
import {
  SafeAreaView,
  StatusBar, 
  View,
  TouchableOpacity
} from 'react-native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import Modal from '../../../components/Modal/Modal.screen'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import styles from './Security.style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Text, Wrapper} from '../../../components' 
import {useTheme} from '@react-navigation/native'
const List = ({ text, onPress }) => (
  <TouchableOpacity style={styles.list} onPress={onPress}>
    <Text style={styles.listItem}>{text}</Text>
  </TouchableOpacity>
)

const TransactionPin = ({ navigation }) => {
  const {colors} = useTheme()
  const [pinModalVisible, setPinModalVisible] = useState(false)
  const [editCurrentPinModalVisible, setEditCurrentPinModalVisible] = useState(
    false
  )
  const [code, setCode] = useState('')

  const showPinModal = () => setPinModalVisible(true)
  const hidePinModal = () => setPinModalVisible(false)

  const showEditPinModal = () => setEditCurrentPinModalVisible(true)
  const hideEditPinModal = () => setEditCurrentPinModalVisible(false)

  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" />
      <Modal visible={pinModalVisible}>
        <SafeAreaView style={{flex: 1,backgroundColor: colors.card}}>
          <View>
            <TouchableOpacity onPress={hidePinModal} style={styles.xicon}>
            <AntDesign name="close" size={24} color={colors.icons}/>
            </TouchableOpacity>

            <View style={styles.container}>
              <Text style={styles.codeTitleLabel}>Set PIN</Text>

              <SmoothPinCodeInput
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'gray'
                }}
                cellStyleFocused={{
                  borderColor: 'black'
                }}
                value={code}
                onTextChange={code => setCode(code)}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>

      <Modal visible={editCurrentPinModalVisible}>
        <SafeAreaView style={{flex: 1,backgroundColor: colors.card}}>
          <View>
            <TouchableOpacity onPress={hideEditPinModal} style={styles.xicon}>
            <AntDesign name="close" size={24} color={colors.icons}/>
            </TouchableOpacity>

            <View style={styles.container}>
              <Text style={styles.codeTitleLabel}>Enter current PIN</Text>

              <SmoothPinCodeInput
                cellStyle={{
                  borderBottomWidth: 2,
                  borderColor: 'gray'
                }}
                cellStyleFocused={{
                  borderColor: 'black'
                }}
                value={code}
                onTextChange={code => setCode(code)}
              />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
 
        <NavHeader
          backIcon
          navigation={navigation}
          title="Transaction PIN"
        />

        <View>
          <List text="Set transaction PIN" onPress={showPinModal} />
          <List text="Change transaction PIN" onPress={showEditPinModal} />
        </View> 
    </Wrapper>
  )
}

export default TransactionPin
