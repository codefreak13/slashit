import React, { useState } from "react"
import { useEffect } from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import styles from './Transactions.style'

export const TransactionList = ({ data, onPress }) => (
    <TouchableOpacity >
        <View style={styles.list}>
            <View style={styles.listItem}>
                <Text>{data.date}</Text>
                <Text>{data.time}</Text>
            </View>
            <View style={styles.listItem}>
                <Text>{data.amount}</Text>
                <Text>{data.type}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

const Transactions = ({ navigation }) => {
    const [transactions, setTransaction] = useState([])

    useEffect(()=>{
        setTransaction([
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
                type: 'Payment',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
                type: 'Payment',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
                type: 'Payment',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
                type: 'Payment',
            },
        ])
    },[])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} title="Transactions" />

                <View>
                    {
                        transactions.map((val, key)=>
                            <TransactionList key={key} data={val} />
                        )
                    }
                </View>
            </SafeAreaView>

        </>
    )
}

export default Transactions