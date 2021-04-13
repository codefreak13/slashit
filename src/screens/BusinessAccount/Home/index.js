import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Wrapper, Text } from '../../../components'
import Button from '../../../components/LinearGradientButton'
import Header from './BusinessHomeHeader'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'

const data = [
  {
    date: 'Jun 26',
    time: '05:28pm',
    amount: '2000.00'
  },
  {
    date: 'Jun 26',
    time: '05:29pm',
    amount: '2000.00'
  },
  {
    date: 'Jun 26',
    time: '05:30pm',
    amount: '2000.00'
  }
]
const index = ({ navigation }) => {
  const { colors } = useTheme()
  const result = 99
  return (
    <Wrapper>
      <Header navigation={navigation} />
      <View style={{ flex: 1 }}>
        <View
          style={[
            styles.availableBalanceView,
            { backgroundColor: colors.primary, borderRadius: 50 }
          ]}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Available Balance</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ ...styles.boldText, letterSpacing: 2, fontSize: 20 }}>
            NGN 35,000.00
          </Text>
          <View style={styles.divider} />
          <TouchableOpacity onPress={() => navigation.navigate("AddMoney")} style={{ flexDirection: 'row' }}>
            <Ionicons
            color={colors.icons}
              name="add-circle-outline"
              size={24}
              style={{ marginRight: 6 }}
            />
            <Text style={styles.boldText}>Add Money</Text>
          </TouchableOpacity>
        </View>
        <Button borderRadius title="Create Order" containerStyle={styles.btn} onPress={()=>navigation.navigate("CreateOrder")} />
        <View style={{ marginTop: 20 }}>
          <Text style={styles.boldText}>Recent</Text>
          {data.map(({date, time, amount}) => (
            <View
              key={Math.random()}
              style={styles.lists}>
              <Text style={{ width: '30%' }}>{date}</Text>
              <Text style={{ width: '30%' }}>{time}</Text>
              <Text style={{ width: '30%' }}>NGN {amount}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.viewAll}>
            <Text>View all</Text>
            <AntDesign name="right" size={14} />
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  )
}

export default index
