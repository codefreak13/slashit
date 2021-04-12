import { StyleSheet } from 'react-native'
const IMAGE_SIZE = 70
export default StyleSheet.create({
  list: {
    borderBottomWidth: .6,
    padding: 10,
    marginTop: 20,
    borderColor: '#757575'
  },
  listData: {
    // textAlign: 'center',
    fontSize: 17,
    color: '#757575'
  },
  profile: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 114,  
    borderWidth: .3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  style: {
    borderWidth: 0,
    borderBottomWidth: 0.6, 
    marginTop: 10,
    borderColor: '#757575',
    // backgroundColor: 'red'
  },
  view: {
      height: IMAGE_SIZE,
      width: IMAGE_SIZE,
      backgroundColor: 'red',
      borderRadius: 150,
      marginLeft: 4
  }
})
