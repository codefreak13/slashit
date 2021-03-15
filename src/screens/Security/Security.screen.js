import React from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import styles from './Security.style'

const List = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.list}>
            <Text style={styles.listItem}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const Security = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} title="Security" />

                <View>
                    <List text="Transaction PIN" onPress={() => navigation.navigate('Security', { screen: 'TransactionPin' })} />
                    <List text="Fingerprint" onPress={() => navigation.navigate('Security', { screen: 'UseFingerprint' })} />
                </View>
            </SafeAreaView>

        </>
    )
}

export default Security