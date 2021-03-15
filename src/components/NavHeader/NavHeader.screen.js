import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import styles from './NavHeader.style'

const NavHeader = ({ navigation, title, rightSection, leftSection }) => {
    const RS = rightSection || <View />;
    const LS = leftSection || <View />;

    return (
        <View style={styles.navContainer}>
            <View style={styles.navCol}>
                <TouchableOpacity  style={{paddingLeft: 15}} onPress={() => navigation.goBack()}>
                    <View>
                        <RS />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.navCol, styles.navTitle]}>
                <Text style={styles.navTitleText}>{title}</Text>
            </View>

            <View style={styles.navCol} />
        </View>
    )
}

export default NavHeader