import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  top: {
    flex: .6,
    backgroundColor: '#BFC0C4',
    padding: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 7
  },
  boldText: { fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#303030',
    marginVertical: 6
  },
  prod: {flex: 1, marginVertical: 15 },

  paidContainer: {
    borderLeftWidth: 5,
    borderLeftColor: '#303030',
    borderWidth: 1,
    borderColor: '#303030',
    padding: 7,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  unpaidContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  box:{ 
    borderWidth: 1,
    borderColor: '#303030',
    padding: 7,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  }
})
