import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {
  CloseEyeIcon,
  DateIconSVG,
  LineSvg,
  LockSvg,
  OnEyeSvg,
  SearchSVG,
  UploadImgIconSVG,
} from '../assets/svgIcons/Index';
import FontFamily from '../styles/FontFamily';
import TextView from './TextView';
import Colors from '../styles/Colors';

const InputFields = ({
  isPasswordVisible,
  passwordField,
  value,
  onChangeText,
  togglePasswordVisibility,
  simpleField,
  placeholder,
  search,
  fieldStyle,
  multiline,
  numberOfLines,
  dateIcon,
  profileSection,
  inputFieldIcon,
  placeholderTextColor,
  keyboardType,
  maxLength,
  editable,
  onPressDate
}) => {
  const [countryCode, setCountryCode] = useState('IN'); // Default country code
  const [callingCode, setCallingCode] = useState('91'); // Default calling code

  if (passwordField) {
    return (
      <View style={styles.inputContainer}>
        <View style={{left: 4}}>
          <LockSvg />
        </View>
        <View style={styles.lineSty}>
          <LineSvg />
        </View>
        <TextInput
          placeholderTextColor={Colors.White}
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={!isPasswordVisible}
          value={value}
          maxLength={maxLength} // Restricts input to a maximum of 15 characters
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {isPasswordVisible ? <CloseEyeIcon /> : <OnEyeSvg />}
        </TouchableOpacity>
      </View>
    );
  } else if (simpleField) {
    return (
      <View
        style={{
          ...styles.inputContainer,
          borderColor: '#EEEEEE',
          backgroundColor: Colors.White,
        }}>
        {search && (
          <View style={{left: 4}}>
            <SearchSVG />
          </View>
        )}

        <TextInput
          placeholderTextColor={placeholderTextColor}
          textAlignVertical={multiline ? 'top' : 'center'}
          style={({...styles.input, color: Colors.gray4}, fieldStyle)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          keyboardType={keyboardType} 
          editable={editable}
        />
        
        {dateIcon && (
          <TouchableOpacity onPress={onPressDate}
            style={{
              position: 'absolute',
              right: 15,
              padding: 16,
            }}>
            <DateIconSVG />
          </TouchableOpacity>
        )}
      </View>
    );
  } else if (profileSection) {
    return (
      <View
        style={{
          ...styles.inputContainer,
          borderColor: '#EEEEEE',
          backgroundColor: Colors.White,
        }}>
        <View style={{}}>{inputFieldIcon}</View>
        <View style={{paddingHorizontal: 10}}>
          <LineSvg color={Colors.gray7} />
        </View>

        <TextInput
          // placeholderTextColor={Colors.White}
          editable={editable}
          maxLength={40}
          textAlignVertical={multiline ? 'top' : 'center'}
          style={({...styles.input, color: Colors.gray4}, fieldStyle)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType} 
        />
        {dateIcon && (
          <View
            style={{
              position: 'absolute',
              right: 15,
              padding: 16,
            }}>
            <DateIconSVG />
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.inputContainer}>
        <View style={{}}>
          <CountryPicker
            withCallingCode
            withFilter
            countryCode={countryCode}
            withFlag
            withEmoji={false}
            containerButtonStyle={{
              maxWidth: '10%',
              top: -3,
            }}
            onSelect={country => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
          />
        </View>
        
        <TextView textSty={styles.callingCode}>+{callingCode}</TextView>
        <LineSvg />
        <TextInput
          // placeholderTextColor={Colors.White}
          style={styles.input}
          placeholder="Phone number"
          keyboardType={keyboardType} 
          maxLength={maxLength} // Restricts input to a maximum of 15 characters
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
};

export default memo(InputFields);

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: Colors.TealBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors['Black'],
    borderBottomWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  callingCode: {
    fontFamily: FontFamily.Bold,
    // color: Colors.White,
    marginLeft: 1,
    fontSize: 15,
    marginRight:7
  },
  input: {
    height: 52,
    fontSize: 15,
    paddingVertical: 10,
    color: Colors.Black,
    fontFamily: FontFamily.Bold,
    flex: 1,
    marginLeft:5
  },
  lineSty: {
    marginLeft: 15,
    marginRight: 10,
  },
});
