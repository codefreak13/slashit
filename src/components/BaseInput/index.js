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
  ...props
}) => {
  return (
    <View style={{marginBottom: 12}}>
      <View style={[styles.inputContainer, style]} {...props}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          numberOfLines={numberOfLines}
          style={[{width: '95%'}, inputStyle]}
        />
        {rightIcon}
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
    borderColor: '#000',
    borderWidth: 1,
    // height: 48,
    width: '100%',
    // backgroundColor: 'rgba(48, 48, 48, 0.3)',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    // marginTop: 3,
  },
});
