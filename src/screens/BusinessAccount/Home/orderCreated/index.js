import React from 'react'
import { Share, View } from 'react-native'
import NavHeader from '../../../../components/NavHeader/NavHeader.screen'
import Feather from 'react-native-vector-icons/Feather'
import Button from '../../../../components/Button'
import { useTheme } from '@react-navigation/native'
import styles from './styles'
import { Text, Wrapper } from '../../../../components'
const VIEW_SIZE = 100
const index = ({ navigation }) => {
	const {colors} = useTheme()
	const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Share Order'
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Wrapper>
      <NavHeader close navigation={navigation} />
			<View style={{flex: 1, justifyContent: 'space-around'}}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.boldText}>Order Created</Text>
        <Text style={{marginTop: 7}}>#1234brff</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{width: VIEW_SIZE, height: VIEW_SIZE, borderRadius: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.text}}>
					<Feather name="send" size={50} color={colors.aux}/>
				</View>
				<Button onPress={onShare} textStyle={{color: colors.aux}} title="Share" containerStyle={{backgroundColor: colors.text, width: '40%', marginTop: 10}}/>
      </View>
			<View style={{flexDirection: 'row', justifyContent: 'space-between'}}> 
			<Text style={styles.boldText}>Total Amount:</Text>
			<Text style={styles.boldText}>NGN 8,500.00</Text>
			</View>
			</View>
    </Wrapper>
  )
}

export default index
