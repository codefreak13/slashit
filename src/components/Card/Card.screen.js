import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import visaImg from '../../assets/images/visa.jpeg'
import styles from './Card.style'

const Card = ({ borderWidth, preferred }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#851B97', '#673AB7']}
      style={[styles.card, { borderWidth: borderWidth ? 1 : 0 }]}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 18}}>{preferred ? 'Preferred' : null }</Text>
      {/* <View style={styles.cardHeader}>
        <Text style={styles.cardBrand}>Slash</Text>
        <Text style={styles.cardPrice}>$150.00</Text>
      </View> */}

      <View style={styles.cardNumberWrapper}>
        <Text style={styles.cardNumber}>**** **** **** 3036</Text>
      </View>

      {/* <View style={styles.cardLastRow}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cardLastRowText}>EXP</Text>
          <Text style={styles.cardLastRowText}>09/24</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.cardLastRowText}>CVV</Text>
          <Text style={styles.cardLastRowText}>425</Text>
        </View>
      </View> */}

      <Image
        width={34}
        height={20}
        resizeMode="contain"
        source={visaImg}
        style={styles.visaImg}
      />
    </LinearGradient>
  )
}

export default Card
