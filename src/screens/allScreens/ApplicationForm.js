import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import CustomDropdown from '../../components/CustomDropdown';
import TextView from '../../components/TextView';
import {DropdownIconSVg} from '../../assets/svgIcons/Index';
import {
  trademarkNatures,
  TrademarkTypes,
  trademarkTypes,
} from '../../constant/Label';
import FontFamily from '../../styles/FontFamily';
import InputFields from '../../components/InputFields';
import Button from '../../components/Button';
import AllString from '../../constant/AllString';
import NavigationString from '../../Navigations/NavigationString';
import {useFormik} from 'formik';
import {TM1Schema} from '../../Services/Validation';
import {useDispatch} from 'react-redux';
import {saveTradeApplicationData} from '../../store/slices/auth';

const ApplicationForm = ({navigation}) => {
  const dispatch = useDispatch();

  const [trademarkType, setTrademarkType] = useState('singlemark');
  const [trademarkNature, setTrademarkNature] = useState('');

  const handleSelectTrademarkType = val => {
    formik.setFieldValue('trademark_type', val.label);
    setTrademarkType(val.value);
  };

  const handleSelectTrademarkNature = val => {
    formik.setFieldValue('trademark_natures', val.label);
    setTrademarkNature(val.value);
  };

  const formik = useFormik({
    initialValues: {
      trademark_type: 'Single Mark',
      client_reference: '',
      trademark_natures: '',
    },
    // validationSchema: TM1Schema,
    onSubmit: values => {
      const payload = {
        // trademark_type: trademarkType,
        trademark_type:'singlemark',
        client_reference: values?.client_reference,
        trademark_natures: trademarkNature,
      };
      console.log('------payload------',payload)
      dispatch(saveTradeApplicationData(payload));
      navigation.navigate(NavigationString.ApplicationStep1Screen);
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
                TM1 Application type
              </TextView>
              <DropdownIconSVg />
            </View>

            <View style={styles.fieldBox}>
              <CustomDropdown
              disabled={true}
                label={'Trademark Type'}
                placeholder="Trademark Type"
                data={TrademarkTypes}
                values={formik.values.trademark_type}
                onSelect={handleSelectTrademarkType}
              />
              {formik.touched.trademark_type && formik.errors.trademark_type ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.trademark_type}
                </TextView>
              ) : null}

              <View>
                <TextView textSty={styles.labelSty}>Client Reference</TextView>
                <InputFields
                  simpleField
                  placeholder={'Client Reference'}
                  multiline={true}
                  numberOfLines={4}
                  value={formik.values.client_reference}
                  onChangeText={formik.handleChange('client_reference')}
                  maxLength={500}
                  fieldStyle={{width: '100%',fontSize:12,line:16.39, fontFamily: FontFamily.Bold}}
                />
                {formik.touched.client_reference &&
                formik.errors.client_reference ? (
                  <TextView textSty={styles.errorText}>
                    {formik.errors.client_reference}
                  </TextView>
                ) : null}
              </View>

              <CustomDropdown
                label={'Trademark Nature'}
                placeholder="Trademark Nature"
                data={trademarkNatures}
                values={formik.values.trademark_natures}
                onSelect={handleSelectTrademarkNature}
              />
              {formik.touched.trademark_natures &&
              formik.errors.trademark_natures ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.trademark_natures}
                </TextView>
              ) : null}
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
                onClick={formik.handleSubmit}
                // onClick={() => {
                //   navigation.navigate(NavigationString.ApplicationStep1Screen);
                // }}
                btnName={AllString.Next}
                buttonColor={Colors.White}
                allButtonSty={styles.loginBtnSty}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationForm;

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
  },
  innerViewBtn: {width: '45%'},
  errorText: {
    color: 'red',
    fontSize: 10,
    lineHeight: 12,
    top: -8,
  },
});
