import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

 

export const BaseInput  = ({
  style,
  value,
  placeholder,
  onChangeText,
  touched,
  errors,
  name,
  keyboardType,
  label,
  secureTextEntry,
  rightIcon,
  multiline,
  numberOfLines,
  inputStyle,
  leftIcon,
  defaultValue,
  ...props
}) => {
  return (
    <View style={{marginBottom: 12}}>
      <View style={[styles.inputContainer, style]} {...props}>
        <View>
      {leftIcon}
      </View>
        <TextInput
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={[{width: rightIcon || leftIcon?'80%':'95%'}, inputStyle]}
        />
         <View>
        {rightIcon}
        </View>
      </View>
      {touched && errors && <Text style={styles.errorMessage}>{errors}</Text>}
    </View>
  );
};
export default BaseInput
 const styles = StyleSheet.create({
  inputContainer: { 
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#303030',
    borderWidth: 1,
    height: 48,
    width: '100%',
    borderRadius: 5
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    // marginTop: 3,
  },
});
