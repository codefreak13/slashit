import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        width: '90%',
        height: Dimensions.get('screen').height / 4.5,
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#673AB7',
        position: 'relative',
        padding: 10,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    cardBrand: {
        fontSize: 26,
        padding: 5,
        color: '#fff',
    },
    cardPrice: {
        fontSize: 26,
        padding: 5,
        color: '#fff',
        fontWeight: '700',
        marginTop: -10,
        marginRight: 20
    },
    cardNumberWrapper: {
       marginBottom: 20
    },
    cardNumber: {
        fontSize: 26,
        padding: 5,
        color: '#fff',
    },
    cardLastRow: {
        flexDirection: 'row', 
        width: '50%', 
        justifyContent: 'space-between'
    },
    cardLastRowText: {
        color: '#fff',
        fontSize: 16,
        padding: 5,
    },
    visaImg: {
        width: 60,
        position: 'absolute',
        right: 12,
        bottom: -150
    }
})