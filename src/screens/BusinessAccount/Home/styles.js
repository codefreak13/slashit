import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  availableBalanceView: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lists: {
    height: 50,
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
    width: '24%',
    justifyContent: 'space-between'
  },
  btn: {
    marginTop: 30,
    paddingVertical: 0,
    width: '50%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 50
  },
  cartCounter: {
    color: 'white',
    backgroundColor: '#673AB7',
    width: 20,
    padding: 0,
    margin: 0,
    height: 20,
    top: 10,
    left: 11,
    borderRadius: 150,
    textAlign: 'center',
    fontSize: 10,
    padding: 3,
    marginRight: 8,
    alignItems: 'center'
  },
  touchStyles: {
    alignSelf: 'flex-end',
    position: 'absolute',
    marginRight: 10,
    top: -10,
    right: 10
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 7
  },
  boldText: { fontSize: 17, fontWeight: 'bold', marginBottom: 4 },
  divider: {
    width: '70%',
    height: 1,
    backgroundColor: '#999',
    marginVertical: 6
  }
})
