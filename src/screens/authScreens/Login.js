// import {
//   Image,
//   ScrollView,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   Text,
//   Modal,
//   Platform
// } from 'react-native';
// import React, {useState, useCallback} from 'react';
// import Colors from '../../styles/Colors';
// import ImagePath from '../../constant/ImagePath';
// import TextView from '../../components/TextView';
// import InputFields from '../../components/InputFields';
// import Button from '../../components/Button';
// import {useNavigation} from '@react-navigation/native';
// import AllString from '../../constant/AllString';
// import {useDispatch} from 'react-redux';
// import {saveUserData} from '../../store/slices/auth';
// import NavigationString from '../../Navigations/NavigationString';
// import {useFormik} from 'formik';
// import {LoginSchema} from '../../Services/Validation';
// import {Call_PostServices} from '../../Services/Services';
// import {Login_API} from '../../config/Url';
// import Loading from '../../components/Loading';
// import { LocalStorage } from '../../utils/LocalStorage';
// import { SafeAreaView } from 'react-native-safe-area-context';
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); //state manage show/hide password

//   const togglePasswordVisibility = useCallback(() => {
//     setIsPasswordVisible(prevState => !prevState);
//   }, []);

//   const handleForgotPassword = useCallback(() => {
//     navigation.navigate(NavigationString.ForgotScreen);
//   }, [navigation]);

//   // Handle successful login
//   const handleLoginbutton = useCallback(async values => {
//     const payload = {
//       phone: values.phoneNumber,
//       password: values.password,
//     };
//     setIsLoading(true);
//     const response = await Call_PostServices(Login_API, payload);
//     setIsLoading(false);
//     if (response?.success) {
//       dispatch(saveUserData(response.data));
//       // console.log('----response?.data----',response?.data)
//       // await AsyncStorage.setItem(
//       //   "userData",
//       //   JSON.stringify(response?.data)
//       // );
//       LocalStorage.set('userInfo', JSON.stringify(response?.data));
//       LocalStorage.set('token', response.data.access_token.token);

//     }else if(response?.data?.statusCode===401){
//       alert(response?.data?.message)
//      } else {
//       alert(response.message)
//       console.log(response.message);
//     }
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       // phoneNumber: '7527000025',
//       // password: '12345678',
//       phoneNumber: '',
//       password: '',
//     },
//     validationSchema: LoginSchema,
//     onSubmit: values => {
//       // Call Handle login
//       handleLoginbutton(values);
//     },
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//         <ScrollView
//           contentContainerStyle={{flexGrow: 1}}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}>
//           <View style={{flex: 1}}>
//             <Modal animated={true} transparent={true} visible={isLoading}>
//               <Loading />
//             </Modal>
//             <View style={styles.firstViewContainer}>
//               <View style={{flex: 0.2}}>
//                 <Image source={ImagePath.leftCircle} />
//               </View>
//               <View
//                 style={{
//                   alignItems: 'center',
//                   flex: 0.6,
//                 }}>
//                 <Image source={ImagePath.logo} />
//                 <TextView heading headingTextSty={styles.titleSty}>
//                   Sign IN to your Account
//                 </TextView>
//               </View>
//               <View style={{flex: 0.2}}>
//                 <Image source={ImagePath.rightCircle} />
//               </View>
//             </View>
//             <View style={styles.viewContainer}>
//               <TextView heading headingTextSty={styles.headingSty}>
//                 Enter Your Details
//               </TextView>

//               {/* Phone Number Input */}
//               <TextView textSty={styles.labelSty}>Phone</TextView>
//               <InputFields
//                 value={formik.values.phoneNumber}
//                 onChangeText={formik.handleChange('phoneNumber')}
//                 keyboardType="phone-pad"
//                 maxLength={15}
//               />
//               {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
//                 <TextView textSty={styles.errorText}>
//                   {formik.errors.phoneNumber}
//                 </TextView>
//               ) : null}

//               {/* Password Input */}
//               <TextView textSty={{...styles.labelSty, marginTop: 20}}>
//                 Password
//               </TextView>
//               <InputFields
//                 passwordField
//                 value={formik.values.password}
//                 maxLength={25}
//                 isPasswordVisible={isPasswordVisible}
//                 onChangeText={formik.handleChange('password')}
//                 togglePasswordVisibility={() => {
//                   togglePasswordVisibility();
//                 }}
//               />
//               {formik.touched.password && formik.errors.password ? (
//                 <TextView textSty={styles.errorText}>
//                   {formik.errors.password}
//                 </TextView>
//               ) : null}

//               {/* Forgot Password */}
//               <TouchableOpacity onPress={() => handleForgotPassword()}>
//                 <TextView
//                   textSty={{
//                     ...styles.labelSty,
//                     textAlign: 'right',
//                     marginTop: 0,
//                   }}>
//                   Forgot password?
//                 </TextView>
//               </TouchableOpacity>

//               {/* Login Button */}
//               <Button
//                 onClick={formik.handleSubmit}
//                 // onClick={() => handleLoginbutton()}
//                 btnName={AllString.LOGIN}
//                 buttonColor={Colors.White}
//                 allButtonSty={styles.loginBtnSty}
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: Colors.White},
//   firstViewContainer: {
//     flex: 0.3,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   viewContainer: {
//     flex: 0.7,
//     backgroundColor: Colors.TealBlue,
//     borderTopLeftRadius: 27,
//     borderTopRightRadius: 27,
//     paddingHorizontal: 15,
//     paddingBottom: 20, // Add padding for better scrolling
//   },
//   titleSty: {
//     fontSize: 22,
//     textAlign: 'center',
//     marginTop: 30,
//     textTransform: 'uppercase',
//   },
//   headingSty: {
//     fontSize: 16,
//     color: Colors.White,
//     textAlign: 'center',
//     marginTop: 30,
//     textTransform: 'uppercase',
//   },
//   labelSty: {
//     fontSize: 15,
//     color: Colors.White,
//     marginTop: 30,
//     textTransform: 'uppercase',
//   },

//   loginBtnSty: {
//     marginHorizontal: 0,
//     paddingVertical: 15,
//     marginTop: 40,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 10,
//     lineHeight: 12,
//     top: -8,
//   },
// });







import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import InputFields from "../../components/InputFields";
import {useFormik} from 'formik';
import { LoginSchema } from "../../Services/Validation";
import TextView from "../../components/TextView";
import { ArrowSVG, RightArrowSvg } from "../../assets/svgIcons/Index";
import NavigationString from "../../Navigations/NavigationString";

const Login = ({navigation}) => {
  const [mobile, setMobile] = useState("");


  


  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      // password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      // Call Handle login
      handleLoginbutton(values);
    },
  });


    // Handle successful login
    const handleLoginbutton = useCallback(async values => {
      const payload = {
        phone: values.phoneNumber,
      };
      navigation.navigate(NavigationString.OTPScreen)
      // setIsLoading(true);
      // const response = await Call_PostServices(Login_API, payload);
      // setIsLoading(false);
      // if (response?.success) {
      //   dispatch(saveUserData(response.data));
      //   // console.log('----response?.data----',response?.data)
      //   // await AsyncStorage.setItem(
      //   //   "userData",
      //   //   JSON.stringify(response?.data)
      //   // );
      //   LocalStorage.set('userInfo', JSON.stringify(response?.data));
      //   LocalStorage.set('token', response.data.access_token.token);
  
      // }else if(response?.data?.statusCode===401){
      //   alert(response?.data?.message)
      // } else {
      //   alert(response.message)
      //   console.log(response.message);
      // }
    }, []);

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
        {/* <Text style={{ fontSize: 20 }}>←</Text> */}
        <ArrowSVG />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Enter Mobile number for verification</Text>

      {/* Subheading */}
      <Text style={styles.subText}>
        This number will be used for all ride-related communication. You shall
        receive an SMS with code for verification
      </Text>

      {/* Input Row */}
      {/*
        {mobile.length > 0 && (
          <TouchableOpacity onPress={() => setMobile("")}>
            <Text style={styles.clear}>✕</Text>
          </TouchableOpacity>
        )}
    */}
      <View>
      <InputFields
                value={formik.values.phoneNumber}
                onChangeText={formik.handleChange('phoneNumber')}
                keyboardType="phone-pad"
                maxLength={15}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <TextView textSty={styles.errorText}>
                  {formik.errors.phoneNumber}
                </TextView>
              ) : null}
      </View>

      {/* Next Button */}
      <TouchableOpacity 
      onPress={formik.handleSubmit}
      style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  heading: {
    width:'70%',
    marginTop:"5%",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  subText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
    width:'85%',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    paddingVertical: 10,
  },
  flag: {
    width: 25,
    height: 18,
    marginRight: 8,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  clear: {
    fontSize: 18,
    color: "#888",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#2d2d46",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    lineHeight: 12,
    top: -8,
  },
});
