import React from 'react';
import {styles} from './styles';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useTheme} from '@react-navigation/native'
const Button  = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  icon,
}) =>{
  const {colors} = useTheme()
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container, 
        {backgroundColor: colors.primary, flexDirection: icon ? 'row' : 'column', justifyContent: 'center'},
        containerStyle,
      ]}>
        {
          icon ? (
            <View style={{alignSelf: 'center', marginRight: 12}}>
        <Image source={icon} />
      </View>
          ) : null
        }
      
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
} 

export default Button;
