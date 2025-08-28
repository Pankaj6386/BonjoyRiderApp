// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useCallback, useState} from 'react';
// import Header from '../../components/Header';
// import Colors from '../../styles/Colors';
// import CustomDropdown from '../../components/CustomDropdown';
// import TextView from '../../components/TextView';
// import {
//   DropdownIconSVg,
//   LineSvg,
//   UploadImgIconSVG,
// } from '../../assets/svgIcons/Index';
// import {
//   Countries,
//   ECasesensitive,
//   EClassification,
//   EPriority,
//   trademarkNatures,
//   TrademarkTypes,
//   trademarkTypes,
//   TrademarkTypesDetails,
// } from '../../constant/Label';
// import FontFamily from '../../styles/FontFamily';
// import InputFields from '../../components/InputFields';
// import Button from '../../components/Button';
// import AllString from '../../constant/AllString';
// import NavigationString from '../../Navigations/NavigationString';
// import {useDispatch, useSelector} from 'react-redux';
// import {useFormik} from 'formik';
// import {TM1Schema, TM3Schema} from '../../Services/Validation';
// import {saveTradeApplicationData} from '../../store/slices/auth';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import moment from 'moment';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {UploadImage} from '../../utils/CommonMethod';

// const ApplicationFormDetails = ({navigation}) => {
//   const dispatch = useDispatch();

//   const [trademarkType, setTrademarkType] = useState('');

//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

//   const [showPriority, setShowPriority] = useState(false);

//   const handleSelectTrademarkType = val => {
//     setTrademarkType(val?.value);
//     formik.setFieldValue('trademarkDetaild_type', val?.label);
//   };

//   const handleCaseSensitiveType = val => {
//     formik.setFieldValue('case_sensitive', val?.value);
//   };

//   const handleclassificationType = val => {
//     formik.setFieldValue('classification', val?.value);
//   };

//   const handlePriorityType = val => {
//     formik.setFieldValue('priority_type', val?.value);
//   };

//   const handleSelectCountry = val => {
//     formik.setFieldValue('priority_country', val?.value);
//   };

//   const formik = useFormik({
//     initialValues: {
//       trademarkDetaild_type: '',
//       representation: '',
//       case_sensitive: '',
//       classification: '',
//       good_services: '',
//       endorsement: '',
//       priority_type: '',
//       priority_country: '',
//       priority_number: '',
//       priority_date: '',
//       TradeMarkImage: '',
//     },
//     validationSchema: TM3Schema,
//     onSubmit: values => {
//       console.log('Form submitted', values);
//       const payload = {
//         ...formik.values,
//         trademarkDetaild_type: trademarkType,
//       };
//       dispatch(saveTradeApplicationData(payload));
//       navigation.navigate(NavigationString.ApplicationImgUploadScreen);
//       // Handle form submission
//     },
//   });

//   const handleDatePicker = useCallback(() => {}, []);

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = date => {
//     console.warn('A date has been picked: ', date);

//     const formattedDate = moment(date).format('DD-MM-YYYY');

//     formik.setFieldValue('priority_date', formattedDate);

//     // formik.setFieldValue('priority_date', date)
//     hideDatePicker();
//   };


//   // Open Image Library
//   const handleImageAttach = () => {
//     let options = {
//       mediaType: 'photo',
//       quality: 1, // Image quality (1 = best)
//     };

//     launchImageLibrary(options, async response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error:', response.error);
//       } else {
//         const imageUri = response.assets[0].uri;
//         console.log('upload images --', imageUri);
//         const uploadImageUrl = await UploadImage(imageUri);

//         formik.setFieldValue('TradeMarkImage', uploadImageUrl);
//       }
//     });
//   };

//   return (
//     <SafeAreaView style={styles.safeView}>
//       {/* Header View */}

//       <Header
//         arrowBack
//         notify
//         title={'New Application'}
//         rightClick={() => navigation.goBack()}
//         clickNotification={() => {
//           // navigation.goBack();
//         }}
//       />

//       <ScrollView
//         contentContainerStyle={{flexGrow: 1}}
//         nestedScrollEnabled={true}>
//         <View style={styles.container}>
//           <View style={styles.box}>
//             <View style={styles.topHeading}>
//               <TextView heading headingTextSty={styles.textHeaing}>
//                 TM1 Mark Details
//               </TextView>
//               <DropdownIconSVg />
//             </View>

//             <View style={styles.fieldBox}>
//               <CustomDropdown
//                 label={'Trademark Type'}
//                 placeholder="Select"
//                 data={TrademarkTypesDetails}
//                 values={formik.values.trademarkDetaild_type}
//                 onSelect={handleSelectTrademarkType}
//               />

//               <View>
//                 <TextView textSty={styles.labelSty}>Representation</TextView>
//                 <InputFields
//                   fieldStyle={{
//                     width: '100%',
//                     fontSize: 12,
//                     line: 16.39,
//                     fontFamily: FontFamily.Bold,
//                   }}
//                   simpleField
//                   placeholder={'Trade Mark Name'}
//                   value={formik.values.representation}
//                   onChangeText={formik.handleChange('representation')}
//                   maxLength={30}
//                 />
//               </View>

//               <CustomDropdown
//                 label={'Case Sensitive'}
//                 placeholder="Select"
//                 data={ECasesensitive}
//                 values={formik.values.case_sensitive}
//                 onSelect={handleCaseSensitiveType}
//               />

//               {formik.values.trademarkDetaild_type == 'Image mark' && (
//                 <View>
//                   <TextView textSty={styles.labelSty}>
//                     Trade Mark Image
//                   </TextView>
//                   <View style={styles.uploadView}>
//                     <TouchableOpacity
//                       onPress={() => handleImageAttach()}
//                       style={{paddingLeft: 15}}>
//                       <UploadImgIconSVG />
//                     </TouchableOpacity>
//                     <View style={{paddingHorizontal: 10}}>
//                       <LineSvg color={Colors.gray7} />
//                     </View>
//                     <TextView
//                       textSty={{
//                         ...styles.uploadText,
//                         color: formik.values.TradeMarkImage
//                           ? Colors.gray4
//                           : Colors.placeHolderColor,
//                       }}>
//                       {formik.values.TradeMarkImage
//                         ? formik.values.TradeMarkImage
//                         : 'Attach'}
//                     </TextView>
//                   </View>
//                 </View>
//               )}

//               <CustomDropdown
//                 label={'Classification'}
//                 placeholder="Select"
//                 data={EClassification}
//                 values={formik.values.classification}
//                 onSelect={handleclassificationType}
//               />
//               <View>
//                 <TextView textSty={styles.labelSty}>
//                   Goods and services*
//                 </TextView>
//                 <InputFields
//                   fieldStyle={{
//                     width: '100%',
//                     fontSize: 12,
//                     line: 16.39,
//                     fontFamily: FontFamily.Bold,
//                   }}
//                   simpleField
//                   placeholder={'Goods and services...'}
//                   multiline={true}
//                   numberOfLines={4}
//                   value={formik.values.good_services}
//                   onChangeText={formik.handleChange('good_services')}
//                   maxLength={500}
//                 />

//                 {formik.touched.good_services && formik.errors.good_services ? (
//                   <TextView textSty={styles.errorText}>
//                     {formik.errors.good_services}
//                   </TextView>
//                 ) : null}
//               </View>
//               <View>
//                 <TextView textSty={styles.labelSty}>Endorsement</TextView>
//                 <InputFields
//                   fieldStyle={{
//                     width: '100%',
//                     fontSize: 12,
//                     line: 16.39,
//                     fontFamily: FontFamily.Bold,
//                   }}
//                   simpleField
//                   placeholder={'Endorsement'}
//                   multiline={true}
//                   numberOfLines={4}
//                   value={formik.values.endorsement}
//                   onChangeText={formik.handleChange('endorsement')}
//                   maxLength={500}
//                 />
//               </View>
//               <View>
//                 <View style={styles.line} />
//                 <TextView textSty={styles.labelSty}>Priority Claim</TextView>
//                 <Button
//                   onClick={() => {
//                     setShowPriority(!showPriority);
//                   }}
//                   btnName={AllString.ClickPriority}
//                   buttonColor={Colors.White}
//                   allButtonSty={{
//                     ...styles.loginBtnSty,
//                     backgroundColor: Colors.mintBlack,
//                     marginBottom: 20,
//                   }}
//                 />
//               </View>

//               {showPriority && (
//                 <>
//                   <CustomDropdown
//                     label={'Priority  Type'}
//                     placeholder="Select"
//                     data={EPriority}
//                     values={formik.values.priority_type}
//                     onSelect={handlePriorityType}
//                   />
//                   <CustomDropdown
//                     label={'Country'}
//                     placeholder="Select"
//                     data={Countries}
//                     values={formik.values.priority_country}
//                     onSelect={handleSelectCountry}
//                   />
//                   <View>
//                     <TextView textSty={styles.labelSty}>
//                       Priority Number
//                     </TextView>
//                     <InputFields
//                       fieldStyle={{
//                         width: '100%',
//                         fontSize: 12,
//                         line: 16.39,
//                         fontFamily: FontFamily.Bold,
//                       }}
//                       simpleField
//                       keyboardType="phone-pad"
//                       placeholder={'Priority Number'}
//                       value={formik.values.priority_number}
//                       onChangeText={formik.handleChange('priority_number')}
//                       maxLength={15}
//                     />
//                   </View>
//                   <View>
//                     <TextView textSty={styles.labelSty}>Priority Date</TextView>
//                     <InputFields
//                       onPressDate={() => showDatePicker()}
//                       fieldStyle={{
//                         fontSize: 12,
//                         line: 16.39,
//                         width: '85%',
//                         fontFamily: FontFamily.Bold,
//                         color: formik.values.priority_date
//                           ? Colors.gray4
//                           : Colors.placeHolderColor,
//                       }}
//                       simpleField
//                       editable={false}
//                       value={formik.values.priority_date}
//                       onChangeText={formik.values.priority_date}
//                       dateIcon
//                       placeholder={
//                         formik.values.priority_date
//                           ? formik.values.priority_date
//                           : 'DD-MM-YYYY'
//                       }
//                     />
//                   </View>
//                 </>
//               )}
//             </View>
//           </View>
//           <View style={styles.btnView}>
//             <View style={styles.innerViewBtn}>
//               <Button
//                 onClick={() => {
//                   navigation.goBack();
//                 }}
//                 btnName={AllString.Cancel}
//                 buttonColor={Colors.White}
//                 allButtonSty={{
//                   ...styles.loginBtnSty,
//                   backgroundColor: Colors.MantisGreen,
//                 }}
//               />
//             </View>
//             <View style={styles.innerViewBtn}>
//               <Button
//                 onClick={formik.handleSubmit}
//                 btnName={AllString.Next}
//                 buttonColor={Colors.White}
//                 allButtonSty={styles.loginBtnSty}
//               />
//             </View>
//           </View>
//         </View>
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           onConfirm={handleConfirm}
//           onCancel={hideDatePicker}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ApplicationFormDetails;

// const styles = StyleSheet.create({
//   safeView: {flex: 1, backgroundColor: Colors.bgColor},
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     marginHorizontal: 16,
//   },
//   loginBtnSty: {
//     backgroundColor: Colors.TealBlue,
//     marginHorizontal: 0,
//     paddingVertical: 14,
//     marginTop: 15,
//   },
//   box: {
//     marginVertical: 10,
//     backgroundColor: Colors.linghtBlue,
//     borderRadius: 5,
//     marginTop: 25,
//   },
//   topHeading: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: Colors.White,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//     padding: 15,
//     paddingVertical: 20,
//   },
//   textHeaing: {
//     fontSize: 14,
//     lineHeight: 19.12,
//     color: Colors.gray4,
//   },
//   fieldBox: {padding: 15, marginTop: 10},
//   labelSty: {
//     fontSize: 12,
//     lineHeight: 16.39,
//     fontFamily: FontFamily.Bold,
//     color: Colors.gray4,
//   },
//   btnView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   innerViewBtn: {width: '45%'},
//   line: {
//     borderWidth: 0.8,
//     borderColor: Colors.gray6,
//     marginVertical: 15,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 10,
//     lineHeight: 12,
//     top: -8,
//   },
//   labelSty: {
//     fontSize: 12,
//     lineHeight: 16.39,
//     fontFamily: FontFamily.Bold,
//     color: Colors.gray4,
//   },
//   btnView: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   innerViewBtn: {width: '45%'},
//   uploadView: {
//     marginVertical: 8,
//     backgroundColor: Colors.White,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   uploadText: {
//     fontSize: 14,
//     lineHeight: 19.12,
//     color: Colors.placeHolderColor,
//     fontFamily: FontFamily.Medium,
//   },
// });

import { View, Text } from 'react-native'
import React from 'react'

const ApplicationFormDetails = () => {
  return (
    <View>
      <Text>ApplicationFormDetails</Text>
    </View>
  )
}

export default ApplicationFormDetails