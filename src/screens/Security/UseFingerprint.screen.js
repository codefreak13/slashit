import React from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import styles from './Security.style'

const List = ({ text }) => (
    <View style={styles.list}>
        <Text style={styles.listItem}>{text}</Text>
    </View>)

const UseFingerprint = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} title="Use Fingerprint to" />

                <View>
                    <List text="Log in to your account" />
                    <List text="Approve payments" />
                </View>
            </SafeAreaView>

        </>
    )
}

export default UseFingerprint