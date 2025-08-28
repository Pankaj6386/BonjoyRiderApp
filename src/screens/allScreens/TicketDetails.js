import {
  FlatList,
  Image,
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
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';
import ImagePath from '../../constant/ImagePath';
import { TicketImg1SVG } from '../../assets/svgIcons/Index';
import Button from '../../components/Button';
import NavigationString from '../../Navigations/NavigationString';

const TicketDetails = ({navigation}) => {
  const attachments = [
    {id: '1', uri: 'https://via.placeholder.com/150'},
    {id: '2', uri: 'https://via.placeholder.com/150'},
    {id: '3', uri: 'https://via.placeholder.com/150'},
    {id: '4', uri: 'https://via.placeholder.com/150'},
  ];

  const renderAttachment = ({item}) => (
    <Image source={ImagePath.docImage} style={styles.attachmentImage} />
  );

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        title={'Ticket Details'}
        radius
        rightClick={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.card}>
            {/* Header Section */}
            <View style={styles.header}>
              <View
                style={styles.ticketView}>
                <TextView textSty={styles.referenceText}>Ticket ID</TextView>
                <TextView
                  textSty={{
                    ...styles.referenceText,
                    fontFamily: FontFamily.Bold,
                  }}>
                  #TM-987654
                </TextView>
              </View>
              <View
                style={styles.ticketView}>
                <TextView textSty={styles.referenceText}>Status</TextView>
                <TextView
                  textSty={{
                    ...styles.referenceText,
                    fontFamily: FontFamily.Bold,
                  }}>
                  Open
                </TextView>
              </View>

            
             
            </View>
            <View style={styles.line} />
            {/* Application Overview Section */}
            <View style={styles.section}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <TicketImg1SVG />
              <TextView textSty={styles.sectionTitle}>
                {`  `}Application Overview
              </TextView>
              
              </View>
              <View >
                <TextView textSty={styles.content}>I am unable to complete the payment process for Invoice #234 due to a technical error. The page freezes after entering payment details.</TextView>
                <TextView textSty={styles.date}>09:00  AM</TextView>
              </View>
           
            </View>

            <View style={styles.line} />
            {/* Application Overview Section */}
            <View style={styles.section}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <TicketImg1SVG />
          
              
              </View>
              <View >
                <TextView textSty={styles.content}>I am unable to complete the payment process for Invoice #234 due to a technical error. The page freezes after entering payment details.</TextView>
                <TextView textSty={styles.date}>09:00  AM</TextView>
              </View>
           
            </View>
            <View style={styles.line} />

            {/* ============Save Button============ */}
                        <Button
                          onClick={() => {
                            // navigation.navigate(NavigationString.MyTicketsScreen);
                          }}
                          btnName={'Add Response'}
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

export default TicketDetails;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  ticketView:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 30,
  },
  header: {
    marginBottom: 16,
  },
  referenceText: {
    fontSize: 14,
    lineHeight: 40,
    color: Colors.gray,
    fontFamily: FontFamily.Medium,
  },
  title: {
    fontSize: 15,
    lineHeight: 20.49,
    fontFamily: FontFamily.Bold,
    marginVertical: 4,
    color: Colors.gray1,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  dateText: {
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.gray,
    fontFamily: FontFamily.Medium,
  },
  statusBadge: {
    backgroundColor: Colors.lightMintGreen,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.MantisGreen,
    fontWeight: FontFamily.SemiBold,
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 15,
    lineHeight: 20.49,
    fontFamily: FontFamily.Bold,
    marginVertical: 4,
    color: Colors.gray1,
    marginBottom: 8,
  },
  content: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.gray3,
    marginTop:5
  },
  date: {
    fontFamily:FontFamily.Light,
    fontSize: 10,
    lineHeight: 13.66,
    color: Colors.gray3,
    textAlign:'right',marginBottom:10
  },
  line: {
    borderWidth: 0.8,
    borderColor: Colors.gray5,
    marginBottom: 8,
  },
   loginBtnSty: {
      backgroundColor: Colors.TealBlue,
      marginHorizontal: 0,
      paddingVertical: 14,
      marginVertical: 20,
      width: '100%',
    },
});
