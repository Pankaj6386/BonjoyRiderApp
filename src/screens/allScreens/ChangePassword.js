import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import TextView from '../../components/TextView';
import InputFields from '../../components/InputFields';
import FontFamily from '../../styles/FontFamily';
import Button from '../../components/Button';
import {useFormik} from 'formik';
import {ChangePassSchema} from '../../Services/Validation';
import {Call_InstancePostServices} from '../../Services/Services';
import {ChangePassword_API} from '../../config/Url';
import Loading from '../../components/Loading';

const ChangePassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: ChangePassSchema,
    onSubmit: values => {
      // Call Handle forgot
      handleChangePassbutton(values);
    },
  });

  // Handle handle Reset Passbutton
  const handleChangePassbutton = useCallback(async values => {
    const payload = {
      old_password: values.oldPassword,
      new_password: values.newPassword,
      confirm_password: values.confirmPassword,
    };
    setIsLoading(true);
    const response = await Call_InstancePostServices(
      ChangePassword_API,
      payload,
    );
    setIsLoading(false);
    if (response?.success) {
      alert(response.message);
      formik.resetForm(); // Reset form on button click
    } else if (response?.data?.statusCode === 401) {
      alert(response?.data?.message);
    } else {
      alert(response.message);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header
        radius
        arrowBack
        rightClick={() => navigation.goBack()}
        title={'Change Password'}
      />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Modal animated={true} transparent={true} visible={isLoading}>
            <Loading />
          </Modal>

          <View style={styles.addressSty}>
            <View style={styles.inputBox}>
              <TextView textSty={styles.labelSty}>Old Password</TextView>
              <InputFields
                simpleField
                placeholderTextColor={Colors.placeHolderColor1}
                placeholder={'Old Password'}
                fieldStyle={styles.inputField}
                value={formik.values.oldPassword}
                maxLength={25}
                onChangeText={formik.handleChange('oldPassword')}
              />
              {formik.touched.oldPassword && formik.errors.oldPassword ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.oldPassword}
                </TextView>
              ) : null}
            </View>
            <View style={styles.inputBox}>
              <TextView textSty={styles.labelSty}>New Password</TextView>
              <InputFields
                simpleField
                placeholderTextColor={Colors.placeHolderColor1}
                placeholder={'New Password'}
                fieldStyle={styles.inputField}
                value={formik.values.newPassword}
                maxLength={25}
                onChangeText={formik.handleChange('newPassword')}
              />
              {formik.touched.newPassword && formik.errors.newPassword ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.newPassword}
                </TextView>
              ) : null}
            </View>
            <View style={styles.inputBox}>
              <TextView textSty={styles.labelSty}>Confirm Password</TextView>
              <InputFields
                simpleField
                placeholderTextColor={Colors.placeHolderColor1}
                placeholder={'Confirm  Password'}
                fieldStyle={styles.inputField}
                value={formik.values.confirmPassword}
                maxLength={25}
                onChangeText={formik.handleChange('confirmPassword')}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.confirmPassword}
                </TextView>
              ) : null}
            </View>
            {/* ============Save Button============ */}
            <Button
              onClick={formik.handleSubmit}
              // onClick={() => {
              //   navigation.goBack()
              // }}
              btnName={'Save'}
              buttonColor={Colors.White}
              allButtonSty={{
                ...styles.loginBtnSty,
                backgroundColor: Colors.MantisGreen,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {justifyContent: 'center', padding: 16},
  addressSty: {
    marginTop: 15,
  },
  labelSty: {
    fontSize: 16,
    lineHeight: 21.86,
    fontFamily: FontFamily.Bold,
    color: Colors.gray4,
    textTransform: 'uppercase',
  },
  inputBox: {
    marginTop: 10,
  },
  inputField: {
    width: '80%',
    maxLength: 40,
    fontFamily: FontFamily.Bold,
    fontSize: 15,
    lineHeight: 20.49,
  },
  loginBtnSty: {
    backgroundColor: Colors.TealBlue,
    marginHorizontal: 0,
    paddingVertical: 14,
    marginTop: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    lineHeight: 12,
    top: -8,
  },
});
