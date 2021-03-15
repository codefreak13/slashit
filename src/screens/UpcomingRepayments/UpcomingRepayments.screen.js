import React, { useEffect, useState } from "react"
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native"
import BackIcon from "../../assets/images/BackIcon"
import NavHeader from "../../components/NavHeader/NavHeader.screen"
import {TransactionList} from "../Transactions/Transactions.screen"
import styles from './UpcomingRepayments.style'

const List = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.list}>
            <Text style={styles.listItem}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const UpcomingRepayments = ({ navigation }) => {
    const [upcoming, setUpcoming] = useState([])

    useEffect(()=>{
        setUpcoming([
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
            },
            {
                date: 'Jul 12, 2020',
                time: '01:45 AM',
                amount: '6,900.00',
            },
        ])
    },[])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <NavHeader rightSection={BackIcon} navigation={navigation} title="Upcoming Repayments" />

                <View>
                    {
                        upcoming.map((val, key)=>
                            <TransactionList key={key} data={val} />
                        )
                    }
                </View>
            </SafeAreaView>

        </>
    )
}

export default UpcomingRepayments