// import {
//   FlatList,
//   Modal,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import Header from '../../components/Header';
// import Colors from '../../styles/Colors';
// import CustomDropdown from '../../components/CustomDropdown';
// import TextView from '../../components/TextView';
// import {
//   DropdownIconSVg,
//   LineSvg,
//   UploadFileIConSVG,
//   UploadImgIconSVG,
// } from '../../assets/svgIcons/Index';
// import {
//   FileTypes,
//   trademarkNatures,
//   trademarkTypes,
// } from '../../constant/Label';
// import FontFamily from '../../styles/FontFamily';
// import InputFields from '../../components/InputFields';
// import Button from '../../components/Button';
// import AllString from '../../constant/AllString';
// import NavigationString from '../../Navigations/NavigationString';
// import {useFormik} from 'formik';
// import {TM4Schema} from '../../Services/Validation';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {UploadImage} from '../../utils/CommonMethod';
// import Loading from '../../components/Loading';
// import DocumentPicker from 'react-native-document-picker';
// import {useSelector} from 'react-redux';
// import {Call_InstancePostServices} from '../../Services/Services';
// import {Trademark_Appliaction_API} from '../../config/Url';

// const ApplicationImgUpload = ({navigation}) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const {tradeApplicationData} = useSelector(state => state.auth);
//   console.log('----tradeApplicationData---', tradeApplicationData);

//   // const [supporting_documents, setDocuments] = useState([]);

//   const renderItem = ({item}) => (
//     <View style={styles.itemContainer}>
//       <TextView textSty={styles.fileName}>{item?.shortPath}</TextView>
//     </View>
//   );

//   const handleSelectTrademarkType = val => {
//     formik.setFieldValue('file_type', val.label);
//   };

//   const formik = useFormik({
//     initialValues: {
//       supporting_documents: [],
//       file_type: '',
//       upload_image: [],
//     },
//     validationSchema: TM4Schema,
//     onSubmit: values => {
//       // console.log('Form submitted', values);
//       // navigation.navigate(NavigationString.TermsandConditionsScreen);
//       handleApplicationSubmit(values);
//     },
//   });

//   const handleApplicationSubmit = async values => {
//     const payload = {
//       trademark_name:'ddd' ,
//       trademark_type: tradeApplicationData?.trademark_type,
//       client_reference: tradeApplicationData?.client_reference,
//       trademark_nature: tradeApplicationData?.trademark_natures,
//       applicant_name: tradeApplicationData?.name,
//       applicant_address:tradeApplicationData?.address,
//       applicant_town: tradeApplicationData?.town,
//       applicant_postal_code: tradeApplicationData.postal_code,
//       applicant_country: tradeApplicationData?.country,
//       applicant_phone: tradeApplicationData?.contact_number,
//       applicant_fax: tradeApplicationData?.fax,
//       applicant_email: tradeApplicationData?.email,
//       aos_name: 'honey',
//       aos_address: '124 Gagga lehri, Saharanpur, Uttar Pradesh 12383, India',
//       aos_town: 'Saharanpur',
//       aos_postal_code: '12383',
//       aos_country: 'India',
//       aos_phone: '9978788748',
//       aos_fax: 'GACD',
//       aos_email: 'honey@yopmail.com',
//       aos_gpa_number: tradeApplicationData.gpa_number,
//       trademark_classification: tradeApplicationData?.classification,
//       goods_services: tradeApplicationData?.good_services,
//       endorsement: tradeApplicationData.endorsement,
//       priority_type: tradeApplicationData?.priority_type,
//       priority_country: tradeApplicationData?.priority_country,
//       priority_number: tradeApplicationData?.priority_number,
//       priority_date: tradeApplicationData?.priority_date,
//             // priority_date: '02-02-2024',
//       supporting_documents: values.supporting_documents?.shortPath,
//       attachment_type:'document',
//       attachments: values.upload_image?.shortPath,
//     };
//     // const payload = {
//     //   trademark_name: 'BYSM-IKDHH',
//     //   trademark_type: tradeApplicationData?.trademark_type,
//     //   client_reference: 'ABC-Reference',
//     //   trademark_nature: 'ordinary',
//     //   applicant_name: 'sunny',
//     //   applicant_address:
//     //     '123 Gagga lehri, Saharanpur, Uttar Pradesh 12383, India',
//     //   applicant_town: 'Saharanpur',
//     //   applicant_postal_code: '12383',
//     //   applicant_country: 'India',
//     //   applicant_phone: '8978788748',
//     //   applicant_fax: 'BACD',
//     //   applicant_email: 'sunny@yopmail.com',
//     //   aos_name: 'honey',
//     //   aos_address: '124 Gagga lehri, Saharanpur, Uttar Pradesh 12383, India',
//     //   aos_town: 'Saharanpur',
//     //   aos_postal_code: '12383',
//     //   aos_country: 'India',
//     //   aos_phone: '9978788748',
//     //   aos_fax: 'GACD',
//     //   aos_email: 'honey@yopmail.com',
//     //   aos_gpa_number: '873737233',
//     //   trademark_classification: 'manual',
//     //   goods_services: 'Food And medicine drugs supply services',
//     //   endorsement: 'Nothing for now',
//     //   priority_type: 'nonconvention',
//     //   priority_country: 'India',
//     //   priority_number: '2322',
//     //   priority_date: '02-02-2024',
//     //   supporting_documents: values.supporting_documents?.shortPath,
//     //   attachment_type: 'document',
//     //   attachments: values.upload_image?.shortPath

//     // };

//     const response = await Call_InstancePostServices(
//       Trademark_Appliaction_API,
//       payload,
//     );
//     console.log(payload, '---trademark api response ===', response);
//     if(response.data.error.statusCode===409){

//       alert(response.data.message)
//     }
//   };

//   // Open Image Library
//   const selectDocuments = async types => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles], // Restricting to PDF files only
//         allowMultiSelection: true,
//         // type: [DocumentPicker.types.allFiles],
//       });

//       const selectedDocuments = result?.map(doc => ({
//         uri: doc.uri,
//         name: doc.name,
//         type: doc.type,
//       }));

//       const resultsUrl = selectedDocuments?.map(doc => doc.uri);
//       setIsLoading(true);
//       const uploadImageUrl = await UploadImage(resultsUrl);
//       setIsLoading(false);

//       console.log(types, '----uploadImageUrl-----', uploadImageUrl);

//       if (types == 'supporting_documents') {
//         formik.setFieldValue(`${types}`, [
//           ...formik.values?.supporting_documents,
//           ...uploadImageUrl,
//         ]);
//       }

//       if (types == 'upload_image') {
//         formik.setFieldValue(`${types}`, [
//           ...formik.values?.upload_image,
//           ...uploadImageUrl,
//         ]);
//       }
//     } catch (error) {
//       if (DocumentPicker.isCancel(error)) {
//         console.log('User cancelled document picker');
//       } else {
//         console.log('Document picker error:', error);
//       }
//     }
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
//           <Modal animated={true} transparent={true} visible={isLoading}>
//             <Loading />
//           </Modal>
//           <View style={styles.box}>
//             <View style={styles.topHeading}>
//               <TextView heading headingTextSty={styles.textHeaing}>
//                 Attachments
//               </TextView>
//               <DropdownIconSVg />
//             </View>

//             <View style={styles.fieldBox}>
//               {/* ----------Supporting Documents-------- */}
//               <View>
//                 <TextView textSty={styles.labelSty}>
//                   Supporting Documents
//                 </TextView>
//                 <View style={styles.uploadView}>
//                   <TouchableOpacity
//                     onPress={() => selectDocuments('supporting_documents')}
//                     style={{paddingLeft: 15}}>
//                     <UploadImgIconSVG />
//                   </TouchableOpacity>
//                   <View style={{paddingHorizontal: 10}}>
//                     <LineSvg color={Colors.gray7} />
//                   </View>
//                   <TextView textSty={styles.uploadText}>{'Attach'}</TextView>
//                 </View>
//                 {formik.touched.supporting_documents &&
//                 formik.errors.supporting_documents ? (
//                   <TextView textSty={styles.errorText}>
//                     {formik.errors.supporting_documents}
//                   </TextView>
//                 ) : null}
//                 <FlatList
//                   data={formik.values.supporting_documents}
//                   keyExtractor={(item, index) => index.toString()}
//                   renderItem={renderItem}
//                   contentContainerStyle={styles.listContainer}
//                 />
//               </View>

//               {/* ----------File Type dropdown-------- */}
//               <CustomDropdown
//                 label={'Select File Type'}
//                 placeholder="Select File Type"
//                 data={FileTypes}
//                 values={formik.values.file_type}
//                 onSelect={handleSelectTrademarkType}
//               />
//               {formik.touched.file_type && formik.errors.file_type ? (
//                 <TextView textSty={styles.errorText}>
//                   {formik.errors.file_type}
//                 </TextView>
//               ) : null}

//               {/* ----------Attact file-------- */}
//               <View style={styles.uploadView}>
//                 <TouchableOpacity
//                   onPress={() => selectDocuments('upload_image')}
//                   style={{paddingLeft: 15}}>
//                   <UploadFileIConSVG />
//                 </TouchableOpacity>
//                 <View style={{paddingHorizontal: 10}}>
//                   <LineSvg color={Colors.gray7} />
//                 </View>
//                 <TextView textSty={styles.uploadText}>Attach</TextView>
//               </View>
//               {formik.touched.upload_image && formik.errors.upload_image ? (
//                 <TextView textSty={styles.errorText}>
//                   {formik.errors.upload_image}
//                 </TextView>
//               ) : null}
//               <FlatList
//                 data={formik.values.upload_image}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItem}
//                 contentContainerStyle={styles.listContainer}
//               />
//             </View>
//           </View>
//           <View style={styles.btnView}>
//             <View style={styles.innerViewBtn}>
//               <Button
//                 onClick={() => {
//                   navigation.goBack();
//                 }}
//                 btnName={AllString.Preview}
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
//                 // onClick={() => {
//                 //   navigation.navigate(
//                 //     NavigationString.TermsandConditionsScreen,
//                 //   );
//                 // }}
//                 btnName={AllString.Submit}
//                 buttonColor={Colors.White}
//                 allButtonSty={styles.loginBtnSty}
//               />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ApplicationImgUpload;

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
//   errorText: {
//     color: 'red',
//     fontSize: 10,
//     lineHeight: 12,
//     top: -8,
//   },

//   itemContainer: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   itemText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   fileName:{
//     fontSize:12,line:16.39, fontFamily: FontFamily.Bold
//   }
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ApplicationImgUpload = () => {
  return (
    <View>
      <Text>ApplicationImgUpload</Text>
    </View>
  )
}

export default ApplicationImgUpload

const styles = StyleSheet.create({})