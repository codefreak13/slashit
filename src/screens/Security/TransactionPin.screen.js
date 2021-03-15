import React, { useState } from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native"
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import BackIcon from "../../assets/images/BackIcon"
import XIcon from "../../assets/images/XIcon"
import Modal from "../../components/Modal/Modal.screen"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import styles from './Security.style'

const List = ({ text, onPress }) => (
    <TouchableOpacity style={styles.list} onPress={onPress}>
        <Text style={styles.listItem}>{text}</Text>
    </TouchableOpacity>
)

const TransactionPin = ({ navigation }) => {
    const [pinModalVisible, setPinModalVisible] = useState(false)
    const [editCurrentPinModalVisible, setEditCurrentPinModalVisible] = useState(false)
    const [code, setCode] = useState('')

    const showPinModal = () => setPinModalVisible(true)
    const hidePinModal = () => setPinModalVisible(false)

    const showEditPinModal = () => setEditCurrentPinModalVisible(true)
    const hideEditPinModal = () => setEditCurrentPinModalVisible(false)

    return (
        <>

            <StatusBar barStyle="dark-content" />
            <Modal visible={pinModalVisible}>
                <SafeAreaView>
                    <View>
                        <TouchableOpacity onPress={hidePinModal} style={styles.xicon}>
                            <XIcon />
                        </TouchableOpacity>

                        <View style={styles.container}>
                            <Text style={styles.codeTitleLabel}>Set PIN</Text>

                            <SmoothPinCodeInput
                                cellStyle={{
                                    borderBottomWidth: 2,
                                    borderColor: 'gray',
                                }}
                                cellStyleFocused={{
                                    borderColor: 'black',
                                }}
                                value={code}
                                onTextChange={code => setCode(code)}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>

            <Modal visible={editCurrentPinModalVisible}>
                <SafeAreaView>
                    <View>
                        <TouchableOpacity onPress={hideEditPinModal} style={styles.xicon}>
                            <XIcon />
                        </TouchableOpacity>

                        <View style={styles.container}>
                            <Text style={styles.codeTitleLabel}>Enter current PIN</Text>

                            <SmoothPinCodeInput
                                cellStyle={{
                                    borderBottomWidth: 2,
                                    borderColor: 'gray',
                                }}
                                cellStyleFocused={{
                                    borderColor: 'black',
                                }}
                                value={code}
                                onTextChange={code => setCode(code)}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>

            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} title="Transaction PIN" />

                <View>
                    <List text="Set transaction PIN" onPress={showPinModal} />
                    <List text="Change transaction PIN" onPress={showEditPinModal} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default TransactionPin