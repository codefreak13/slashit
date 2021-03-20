import React from 'react'
import { Modal as RNModal } from 'react-native'


const Modal = ({ visible, onRequestClose, children, transparent }) => {
    return (
        <RNModal
            animationType="slide"
            transparent={transparent || false}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            {children}
        </RNModal>
    )
}

export default Modal