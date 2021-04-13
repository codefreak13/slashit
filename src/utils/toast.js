import {WToast} from 'react-native-smart-tip'
export const show = (msg) => {
    const toastOpts = {
        data: msg,
        textColor: '#ffffff',
        backgroundColor: '#444444',
        duration: WToast.duration.LONG, //1.SHORT 2.LONG
        position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
    }
    
    WToast.show(toastOpts)
  } 