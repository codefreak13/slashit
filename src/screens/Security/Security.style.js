import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 10
  },
  navCol: {
    width: '33.3%'
  },
  navTitle: {
    alignItems: 'center'
  },
  navTitleText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  list: {
    height: 58,
    justifyContent: 'space-between',
    paddingLeft: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItem: {
    fontSize: 14,
    padding: 5
  },
  xicon: {
    height: 50
  },
  container: {
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 50
  },
  codeTitleLabel: { 
    fontSize: 18,
    marginBottom: 100
  }
})
