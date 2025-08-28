import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../styles/Colors';
import Header from '../../components/Header';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';
import InputFields from '../../components/InputFields';
import {UploadFileIConSVG, UploadImgIconSVG} from '../../assets/svgIcons/Index';
import Button from '../../components/Button';
import NavigationString from '../../Navigations/NavigationString';

const IssueReport = ({navigation}) => {
  const [selected, setSelected] = useState('Minor');

  const options = ['Minor', 'Moderate', 'Major', 'Critical'];
  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header
        radius
        arrowBack
        rightClick={() => navigation.goBack()}
        title={'Report an issue'}
      />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={{marginTop: 15}}>
            <TextView textSty={styles.labelSty}>Severity</TextView>
            <View style={styles.SelectContainer}>
              {options.map(option => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.button,
                    selected === option && styles.selectedButton,
                  ]}
                  onPress={() => setSelected(option)}>
                  <Text
                    style={[
                      styles.text,
                      selected === option && styles.selectedText,
                    ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.inputBox}>
              <TextView textSty={styles.labelSty}>Description</TextView>
              <InputFields
                multiline={true}
                numberOfLines={4}
                simpleField
                placeholderTextColor={Colors.placeHolderColor1}
                placeholder={'Description'}
                fieldStyle={styles.inputField}
              />
            </View>

            <View style={styles.inputBox}>
              <TextView textSty={styles.labelSty}>Upload Image</TextView>
              <InputFields
                profileSection
                inputFieldIcon={<UploadImgIconSVG />}
                placeholderTextColor={Colors.placeHolderColor1}
                placeholder={'Upload Image'}
                fieldStyle={styles.inputField}
              />
            </View>
          </View>

          {/* ============Save Button============ */}
          <Button
            onClick={() => {
              navigation.navigate(NavigationString.TicketSubmittedScreen);
            }}
            btnName={'Submit'}
            buttonColor={Colors.White}
            allButtonSty={{
              ...styles.loginBtnSty,
              backgroundColor: Colors.MantisGreen,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IssueReport;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {justifyContent: 'center', padding: 16},
  SelectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  button: {
    width: '45%',
    marginVertical: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedButton: {
    borderColor: Colors.TealBlue, // Teal border color for selected
  },
  text: {
    color: Colors.gray3,
    fontSize: 15,
    lineHeight: 20.49,
    fontFamily: FontFamily.Bold,
    fontWeight: '700',
  },
  selectedText: {
    color: Colors.TealBlue, // Teal text color for selected
    fontWeight: '700',
  },
  labelSty: {
    fontSize: 14,
    lineHeight: 19.12,
    fontFamily: FontFamily.Medium,
    color: Colors.gray3,
    textTransform: 'uppercase',
  },
  inputBox: {
    marginTop: 10,
  },
  inputField: {
    width: '80%',
    maxLength: 40,
    fontFamily: FontFamily.Medium,
    fontSize: 14,
    lineHeight: 19.12,
  },
  loginBtnSty: {
    backgroundColor: Colors.TealBlue,
    marginHorizontal: 0,
    paddingVertical: 14,
    marginTop: 25,
  },
});
