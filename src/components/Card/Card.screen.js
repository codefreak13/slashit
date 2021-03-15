import React from "react"
import { Image, Text, View } from "react-native"
import visaImg from '../../assets/images/visa.jpeg'
import styles from './Card.style'

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardBrand}>Slash</Text>
                <Text style={styles.cardPrice}>$150.00</Text>
            </View>

            <View style={styles.cardNumberWrapper}>
                <Text style={styles.cardNumber}>5242 0300 6563 3036</Text>
            </View>

            <View style={styles.cardLastRow}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardLastRowText}>EXP</Text>
                    <Text style={styles.cardLastRowText}>09/24</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.cardLastRowText}>CVV</Text>
                    <Text style={styles.cardLastRowText}>425</Text>
                </View>

            </View>

            <Image width={34} height={20} resizeMode='contain' source={visaImg} style={styles.visaImg} />
        </View>
    )
}

export default Card