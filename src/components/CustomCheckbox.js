import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {SaveBlankSVG, SaveIconSvg} from '../assets/svgIcons/Index';

const CustomCheckbox = ({isChecked, onPress}) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
      {/* <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View> */}
      {isChecked ? <SaveIconSvg /> : <SaveBlankSVG />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: 'green',
  },
  checkmark: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CustomCheckbox;
