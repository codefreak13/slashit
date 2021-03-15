import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 80,
    },
    topBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 3,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    btnText: {
        fontSize: 15,
        fontWeight: "600",
        color: '#000000'
    },
    delBtnContainer: {
        alignItems: 'center'
    },
    xicon: {
        height: 50
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: 50
    },
    modalText: {
        fontSize: 18,
        padding: 5,
        fontWeight: '600',
        textAlign: 'center'
    },
    formInputContainer: {
        borderWidth: 1,
        borderColor: '#757575',
        marginTop: 30,
    },
    formLabel: {
        fontSize: 15,
        padding: 5,
        paddingBottom: 7,
    },
    formInput: {
        fontSize: 14,
        paddingBottom: 8,
        paddingLeft: 5,
    },
    formControl: {
        width: '100%'
    },
    policyText: {
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 25
    },
    addCardButton: {
        backgroundColor: '#673AB7',
        width: '100%',
        alignItems: 'center',
        height: 46,
        justifyContent: 'center',
        marginTop: 18
    }
})