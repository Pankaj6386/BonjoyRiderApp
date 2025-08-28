import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import CustomDropdown from '../../components/CustomDropdown';
import TextView from '../../components/TextView';
import {DropdownIconSVg} from '../../assets/svgIcons/Index';
import {
  Countries,
  trademarkNatures,
  trademarkTypes,
} from '../../constant/Label';
import FontFamily from '../../styles/FontFamily';
import InputFields from '../../components/InputFields';
import Button from '../../components/Button';
import AllString from '../../constant/AllString';
import NavigationString from '../../Navigations/NavigationString';
import {useDispatch} from 'react-redux';
import {useFormik} from 'formik';
import {saveTradeApplicationData} from '../../store/slices/auth';
import {TM1Schema, TM2Schema} from '../../Services/Validation';

const ApplicationFormStep1 = ({navigation}) => {
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState('Applicants');

  const handleSelectCountry = val => {
    formik.setFieldValue('country', val.label);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      town: '',
      postal_code: '',
      country: '',
      contact_number: '',
      fax: '',
      email: '',
      gpa_number: '',
    },
    validationSchema: TM2Schema,
    onSubmit: values => {
      console.log('Form submitted', values);
      const payload = {
        ...formik.values,
      };
      dispatch(saveTradeApplicationData(payload));
      navigation.navigate(NavigationString.ApplicationFormDetailsScreen);
      // Handle form submission
    },
  });

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        notify
        title={'New Application'}
        rightClick={() => navigation.goBack()}
        clickNotification={() => {
          // navigation.goBack();
        }}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.topHeading}>
              <TextView heading headingTextSty={styles.textHeaing}>
                TM1 Ownership
              </TextView>
              <DropdownIconSVg />
            </View>

            <View style={styles.fieldBox}>
              {/* =========Tabs =======*/}
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={() => setSelectedTab('Applicants')}
                  style={[
                    styles.tabView,
                    selectedTab === 'Applicants' && styles.activeTab,
                  ]}>
                  <TextView textSty={styles.tabLabel}>Applicants</TextView>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedTab('Address')}
                  style={[
                    styles.tabView,
                    selectedTab === 'Address' && styles.activeTab,
                  ]}>
                  <TextView textSty={styles.tabLabel}>Address</TextView>
                </TouchableOpacity>
              </View>

              <View>
                <TextView textSty={styles.labelSty}>Name*</TextView>
                <InputFields
                   fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                  simpleField
                  placeholder={'Applicant Name'}
                  value={formik.values.name}
                  onChangeText={formik.handleChange('name')}
                  maxLength={500}
                  // fieldStyle={{width:'50%',backgroundColor:'red'}}
                />
                {formik.touched.name && formik.errors.name ? (
                  <TextView textSty={styles.errorText}>
                    {formik.errors.name}
                  </TextView>
                ) : null}
              </View>
              <View>
                <TextView textSty={styles.labelSty}>Address*</TextView>
                <InputFields
                   fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                  simpleField
                  placeholder={'Street Address'}
                  value={formik.values.address}
                  onChangeText={formik.handleChange('address')}
                  maxLength={200}
                />
                {formik.touched.address && formik.errors.address ? (
                  <TextView textSty={styles.errorText}>
                    {formik.errors.address}
                  </TextView>
                ) : null}
              </View>
              <View>
                <View>
                  <TextView textSty={styles.labelSty}>Town*</TextView>
                  <InputFields
                     fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                    simpleField
                    placeholder={'Town'}
                    value={formik.values.town}
                    onChangeText={formik.handleChange('town')}
                    maxLength={200}
                  />
                  {formik.touched.town && formik.errors.town ? (
                    <TextView textSty={styles.errorText}>
                      {formik.errors.town}
                    </TextView>
                  ) : null}
                </View>
                <View>
                  <TextView textSty={styles.labelSty}>Postal Code</TextView>
                  <InputFields
                     fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                    simpleField
                    placeholder={'Postal Code'}
                    value={formik.values.postal_code}
                    onChangeText={formik.handleChange('postal_code')}
                    maxLength={11}
                  />
                </View>
              </View>
              <CustomDropdown
                label={'Country *'}
                placeholder="Country"
                data={Countries}
                onSelect={handleSelectCountry}
                values={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.country}
                </TextView>
              ) : null}
              <View>
                <TextView textSty={styles.labelSty}>Contact Number</TextView>
                <InputFields
                   fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                  simpleField
                   keyboardType="phone-pad"
                  placeholder={'Enter Cintact Number'}
                  value={formik.values.contact_number}
                  onChangeText={formik.handleChange('contact_number')}
                  maxLength={15}
                />
              </View>
              <View>
                <TextView textSty={styles.labelSty}>FAX *</TextView>
                <InputFields
                   fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                  simpleField
                  placeholder={'Enter FAX'}
                  value={formik.values.fax}
                  onChangeText={formik.handleChange('fax')}
                  maxLength={200}
                />
                {formik.touched.fax && formik.errors.fax ? (
                  <TextView textSty={styles.errorText}>
                    {formik.errors.fax}
                  </TextView>
                ) : null}
              </View>
              <View>
                <TextView textSty={styles.labelSty}>Email *</TextView>
                <InputFields
                   fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                  simpleField
                  placeholder={'Enter Email'}
                  value={formik.values.email}
                   keyboardType='email-address'
                  onChangeText={formik.handleChange('email')}
                  maxLength={30}
                />
                {formik.touched.email && formik.errors.email ? (
                  <TextView textSty={styles.errorText}>
                    {formik.errors.email}
                  </TextView>
                ) : null}
              </View>

              {selectedTab == 'Address' && (
                <View>
                  <View style={styles.line} />
                  <TextView textSty={styles.labelSty}>GPA Number</TextView>
                  <InputFields
                     fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                    simpleField
                    placeholder={'Enter Email'}
                    value={formik.values.gpa_number}
                    onChangeText={formik.handleChange('gpa_number')}
                    maxLength={30}
                  />
                </View>
              )}
            </View>
          </View>
          <View style={styles.btnView}>
            <View style={styles.innerViewBtn}>
              <Button
                onClick={() => {
                  navigation.goBack();
                }}
                btnName={AllString.Cancel}
                buttonColor={Colors.White}
                allButtonSty={{
                  ...styles.loginBtnSty,
                  backgroundColor: Colors.MantisGreen,
                }}
              />
            </View>
            <View style={styles.innerViewBtn}>
              <Button
                // disabled={selectedTab == 'Address' ? false : true}
                onClick={formik.handleSubmit}
                // onClick={() => {
                //   navigation.navigate(
                //     NavigationString.ApplicationFormDetailsScreen,
                //   );
                // }}
                btnName={AllString.Next}
                buttonColor={Colors.White}
                allButtonSty={{
                  ...styles.loginBtnSty,
                  backgroundColor: Colors.TealBlue,
                  // selectedTab == 'Address'
                  //   ? Colors.TealBlue
                  //   : Colors.faddedBlue,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationFormStep1;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 16,
  },
  loginBtnSty: {
    backgroundColor: Colors.TealBlue,
    marginHorizontal: 0,
    paddingVertical: 14,
    marginTop: 15,
  },
  box: {
    marginVertical: 10,
    backgroundColor: Colors.linghtBlue,
    borderRadius: 5,
    marginTop: 25,
  },
  topHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 15,
    paddingVertical: 20,
  },
  textHeaing: {
    fontSize: 14,
    lineHeight: 19.12,
    color: Colors.gray4,
  },
  fieldBox: {padding: 15, marginTop: 10},
  labelSty: {
    fontSize: 12,
    lineHeight: 16.39,
    fontFamily: FontFamily.Bold,
    color: Colors.gray4,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  innerViewBtn: {width: '45%'},
  tabLabel: {
    fontSize: 12,
    lineHeight: 16.39,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  tabView: {
    backgroundColor: Colors.gray4,
    // paddingHorizontal: 16,
    paddingVertical: 15,

    borderRadius: 5,
    width: '45%',
  },

  line: {
    borderWidth: 0.8,
    borderColor: Colors.gray6,
    marginVertical: 15,
  },
  activeTab: {
    backgroundColor: '#00838F', // Active tab color
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    lineHeight: 12,
    top: -8,
  },
});
