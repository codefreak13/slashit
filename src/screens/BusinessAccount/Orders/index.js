import React from 'react'
import { View, FlatList } from 'react-native'
import { Wrapper, Text } from '../../../components'
import NavHeader from '../../../components/NavHeader/NavHeader.screen'
import OrderList from './ordersList'
const data = [
  {
    productName: 'Pair of shoe',
    amount: '6,900.00',
    date: 'Jul 12',
    status: 'pending'
  },
  {
    productName: 'Pair of shoe',
    amount: '6,900.00',
    date: 'Jul 12',
    status: 'pending'
  },
  {
    productName: 'Pair of shoe',
    amount: '6,900.00',
    date: 'Jul 12',
    status: 'completed'
  },
  {
    productName: 'Pair of shoe',
    amount: '6,900.00',
    date: 'Jul 12',
    status: 'completed'
  }
]
const index = ({ navigation }) => {
  return (
    <Wrapper>
      <NavHeader backIcon navigation={navigation} title="Orders" />
      <FlatList
        data={data}
        renderItem={({ item, index }) => <OrderList data={item} />}
        keyExtractor={item => Math.random().toString()}
      />
    </Wrapper>
  )
}

export default index
