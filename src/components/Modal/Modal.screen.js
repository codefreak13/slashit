import React from 'react'
import { Modal as RNModal } from 'react-native'


const Modal = ({ visible, onRequestClose, children }) => {
    return (
        <RNModal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            {children}
        </RNModal>
    )
}

export default Modal