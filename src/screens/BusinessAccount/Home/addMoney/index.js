import React, {useState} from 'react'
import { View, TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { Wrapper, Text } from '../../../../components'
import Button from '../../../../components/LinearGradientButton' 
import NavHeader from '../../../../components/NavHeader/NavHeader.screen'
import { useTheme } from '@react-navigation/native'
import { styles } from './styles'

const index = ({ navigation }) => {
  const { colors } = useTheme();
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString('Wema Bank PLC,7822335765,Mathno');
  };
  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  return (
    <Wrapper>
      <NavHeader backIcon title="Add Money" navigation={navigation} />
      <View style={{ flex: 1 }}>
        <View style={{ width: '50%', alignSelf: 'flex-end', marginVertical: 50}}>
          <Text style={{fontSize: 17}}>
            Transfer the amount you want to add to the account details below and
            your Balance will be credited.
          </Text>
        </View>
        <View style={{ borderRadius: 5, backgroundColor: '#b1b0b032', height: 150, paddingHorizontal: 10, paddingVertical: 20, width: '100%', flexDirection:'row', justifyContent: 'space-between'}}>
          <View style={{ width: '50%'}}>
            <Text style={styles.boldText}>Wema Bank PLC</Text>
            <Text style={styles.boldText}>7822335765</Text>
            <Text style={styles.boldText}>Mathno</Text>
          </View>
          <View style={{width: '50%', justifyContent: 'flex-end'}}>
            <Button onPress={()=>copyToClipboard()} containerStyle={{borderRadius: 5, width: '50%', alignSelf: 'flex-end'}} title="Copy"/>
          </View>
        </View>
      </View>
    </Wrapper>
  )
}

export default index
