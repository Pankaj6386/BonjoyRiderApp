// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Platform,
//   Keyboard,
//   Modal,
// } from 'react-native';
// import React, {useCallback, useEffect, useState} from 'react';
// import Colors from '../../styles/Colors';
// import ImagePath from '../../constant/ImagePath';
// import TextView from '../../components/TextView';
// import {useNavigation} from '@react-navigation/native';
// import NavigationString from '../../Navigations/NavigationString';
// import { Call_OTPServices, Call_PostServices } from '../../Services/Services';
// import { OTPVerification_API } from '../../config/Url';
// import Loading from '../../components/Loading';
// import axios from 'axios';

// const Otp = ({route}) => {
//   const navigation = useNavigation();
// const [isLoading, setIsLoading] = useState(false);//state manage to loader


//   const [otp, setOtp] = useState(new Array(6).fill(''));

//   const handleInputChange = (text, index) => {
//     if (text.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = text;
//       setOtp(newOtp);

//       // Auto-focus to the next input field
//       if (text && index < otp.length - 1) {
//         const nextInput = `otpInput${index + 1}`;
//         inputs[nextInput]?.focus();
//       } else if (!text && index > 0) {
//         const prevInput = `otpInput${index - 1}`;
//         inputs[prevInput]?.focus();
//       }
      
//     }

   
//   };

//   useEffect(() => {
//     if (otp.every((digit) => digit !== '')) {
//       const fullOtp = otp.join('');
//       console.log('Full OTP entered:', fullOtp);
//       callOtpApi(fullOtp);
//     }
//   }, [otp]);

//   const callOtpApi = async (otp) => {
//     const otpString = otp.toString().replace(/,/g, '')
//     try {
      
//       const payload = {id: route?.params?.userId, otp: otpString};
//       const response = await Call_PostServices(OTPVerification_API, payload);
// // console.log('verify otp res====',response?.data?.token)
//       if (response.success) {
//         navigation.navigate(NavigationString.ResetPasswordScreen,{token:response?.data?.token})
//       } else {
//         alert(response.message || 'Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP:', error);
//       alert('An error occurred while verifying the OTP. Please try again.');
//     }
//   };


//   const inputs = {};

//   const handleKeyPress = key => {
//     const nextEmptyIndex = otp.findIndex(val => val === ''); // Find the next empty box
//     const lastFilledIndex = otp.reduce(
//       (acc, val, idx) => (val ? idx : acc),
//       -1,
//     ); // Last filled box

//     if (key === 'X') {
//       // Handle delete
//       if (lastFilledIndex !== -1) {
//         const newOtp = [...otp];
//         newOtp[lastFilledIndex] = ''; // Clear the last filled input
//         setOtp(newOtp);
//       }
//     } else if (typeof key === 'string' && !isNaN(key)) {
//       // Handle numeric input
//       if (nextEmptyIndex !== -1) {
//         const newOtp = [...otp];
//         newOtp[nextEmptyIndex] = key; // Fill the next empty box
//         setOtp(newOtp);
//       }
//     }
//   };

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
//                {/* Loading view */}
//           <Modal animated={true} transparent={true} visible={isLoading}>
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
//                   Otp Verification
//                 </TextView>
//               </View>
//               <View style={{flex: 0.2}}>
//                 <Image source={ImagePath.rightCircle} />
//               </View>
//             </View>
//             <View style={styles.viewContainer}>
//               <TextView heading headingTextSty={styles.headingSty}>
//                 Enter your OTP
//               </TextView>

//               <View style={styles.otpContainer}>
//                 {otp.map((value, index) => (
//                   <TextInput
//                     key={index}
//                     ref={ref => (inputs[`otpInput${index}`] = ref)}
//                     style={styles.otpInput}
//                     keyboardType="numeric"
//                     maxLength={1}
//                     value={value}
//                     onChangeText={text => {
//                       handleInputChange(text, index);
//                     }}
//                     onFocus={() => Keyboard.dismiss()}
//                     onKeyPress={e => handleKeyPress(e, index)}
//                   />
//                 ))}
//               </View>

//               <TouchableOpacity
//                 // onPress={() =>
//                 //   navigation.navigate(NavigationString.ResetPasswordScreen)
//                 // }
//                 style={styles.resendContainer}>
//                 <Text style={styles.resendText}>Resend OTP</Text>
//               </TouchableOpacity>

             

//               <View style={styles.keyboardContainer}>
//                 {/* Row 1 */}
//                 <View style={styles.row}>
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('1')}>
//                     <Text style={styles.keyText}>1</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('2')}>
//                     <Text style={styles.keyText}>2</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('3')}>
//                     <Text style={styles.keyText}>3</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.horizontalLine} />

//                 {/* Row 2 */}
//                 <View style={styles.row}>
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('4')}>
//                     <Text style={styles.keyText}>4</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('5')}>
//                     <Text style={styles.keyText}>5</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('6')}>
//                     <Text style={styles.keyText}>6</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.horizontalLine} />

//                 {/* Row 3 */}
//                 <View style={styles.row}>
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('7')}>
//                     <Text style={styles.keyText}>7</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('8')}>
//                     <Text style={styles.keyText}>8</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('9')}>
//                     <Text style={styles.keyText}>9</Text>
//                   </TouchableOpacity>
//                 </View>

//                 <View style={styles.horizontalLine} />

//                 {/* Row 4 */}
//                 <View style={styles.row}>
//                   <TouchableOpacity style={styles.key} onPress={() => {}}>
//                     <Text style={styles.keyText}></Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('0')}>
//                     <Text style={styles.keyText}>0</Text>
//                   </TouchableOpacity>
//                   <View style={styles.verticalLine} />
//                   <TouchableOpacity
//                     style={styles.key}
//                     onPress={() => handleKeyPress('X')}>
//                     <Text style={styles.keyText}>X</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default Otp;

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
//     marginVertical: 30,
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
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     marginHorizontal: 10,
//   },
//   otpInput: {
//     backgroundColor: '#FFF',
//     width: 40,
//     height: 50,
//     textAlign: 'center',
//     borderRadius: 5,
//     fontSize: 18,
//   },
//   resendContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   resendText: {
//     color: '#FFF',
//     textDecorationLine: 'underline',
//   },
//   keypad: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 20,
//   },
//   key: {
//     width: '30%',
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   keyText: {
//     fontSize: 20,
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   keyboardContainer: {
//     width: '100%',
//     marginTop: 10,
//     // backgroundColor: '#00796B',
//     borderRadius: 10,
//     padding: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   key: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   keyText: {
//     fontSize: 24,
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
//   verticalLine: {
//     width: 1,
//     backgroundColor: '#FFFFFF',
//     height: '100%',
//   },
//   horizontalLine: {
//     height: 1,
//     backgroundColor: '#FFFFFF',
//     width: '100%',
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { ArrowSVG } from "../../assets/svgIcons/Index";
import { useDispatch } from "react-redux";
import { saveUserData } from "../../store/slices/auth";

const OtpScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [otp, setOtp] = useState("");

  const handleKeyPress = (digit: string) => {
    if (digit === "back") {
      setOtp((prev) => prev.slice(0, -1));
    } else if (otp.length < 6) {
      setOtp((prev) => prev + digit);
    }
  };

  const renderKey = (label: string, value?: string) => (
    <TouchableOpacity
      style={styles.key}
      onPress={() => value && handleKeyPress(value)}
    >
      <Text style={styles.keyText}>{label}</Text>
    </TouchableOpacity>
  );

  const handleVerify=()=>{
     dispatch(saveUserData({id:1,name:"raj",access_token:{token:'443545'}}));
  }
  return (
    <View style={styles.container}>
      {/* Back Button */}
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={{ fontSize: 20 }}>←</Text>
      </TouchableOpacity> */}

   <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
        {/* <Text style={{ fontSize: 20 }}>←</Text> */}
        <ArrowSVG />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>
        Log in using the OTP sent to {"\n"}+91**********
      </Text>

      {/* OTP Input Display */}
      <View style={styles.otpContainer}>
        {Array(6)
          .fill("")
          .map((_, i) => (
            <View key={i} style={styles.otpBox}>
              <Text style={styles.otpText}>{otp[i] || ""}</Text>
            </View>
          ))}
      </View>

      {/* Clear (X) */}
      {otp.length > 0 && (
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={() => setOtp("")}
        >
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      )}

      {/* Resend OTP */}
      <View style={styles.resendRow}>
        <Text style={styles.subText}>Didn’t get the OTP?</Text>
        <TouchableOpacity>
          <Text style={styles.resendText}> Resend OTP</Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <TouchableOpacity onPress={()=>handleVerify()} style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Custom Keypad */}
      <View style={styles.keypad}>
        <View style={styles.keyRow}>
          {renderKey("1", "1")}
          {renderKey("2", "2")}
          {renderKey("3", "3")}
        </View>
        <View style={styles.keyRow}>
          {renderKey("4", "4")}
          {renderKey("5", "5")}
          {renderKey("6", "6")}
        </View>
        <View style={styles.keyRow}>
          {renderKey("7", "7")}
          {renderKey("8", "8")}
          {renderKey("9", "9")}
        </View>
        <View style={styles.keyRow}>
          {/* <View style={styles.key} />  */}
        {renderKey("#", "#")}
          {renderKey("0", "0")}
          {renderKey("⌫", "back")}
        </View>
      </View>
    </View>
  );
};

export default OtpScreen;

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
    marginTop:"5%",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  otpBox: {
    width: 40,
    height: 40,
    borderBottomWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  otpText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  clearBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
    position:'absolute',
    right:15,
    top:'15%'
  },
  clearText: {
    fontSize: 20,
    color: "#555",
  },
  resendRow: {
    justifyContent:'space-between',
    flexDirection: "row",
    marginBottom: 30,
  },
  subText: {
    fontSize: 14,
    color: "#555",
  },
  resendText: {
    fontSize: 14,
    color: "#2a55ff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2d2d46",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  keypad: {
    marginTop: 20,
  },
  keyRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  key: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
