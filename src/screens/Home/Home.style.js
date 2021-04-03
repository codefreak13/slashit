import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  capture: {
    backgroundColor: '#BE61CE',
    height: Dimensions.get('screen').height
  },
  scrollContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  scrollButton: {
    height: 31,
    width: '27%',
    backgroundColor: '#673AB7',
    justifyContent: 'center',
    borderRadius: 40,
  },
  scrollText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  nav: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  captureIcon: {
    marginTop: Dimensions.get('screen').height / 5,
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 20,
    height: 356,
    
  },
  profile: {
    width: 30,
    height: 30
  },
  cardHolder: {
    // marginTop: 50,
    alignItems: 'center', 
  },
 
payWith: {
  textAlign: 'center',
  marginVertical: 20,
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold'
},
btn: { 
  width: '70%',
  alignSelf: 'center',
  height: 46,
  justifyContent: 'center',
  marginTop: 18,
  borderRadius: 130
}
})
