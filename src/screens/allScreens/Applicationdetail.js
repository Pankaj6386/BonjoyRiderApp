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

const Applicationdetail = ({navigation}) => {
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
        title={'Application detail'}
        rightClick={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View style={styles.card}>
            {/* Header Section */}
            <View style={styles.header}>
              <TextView textSty={styles.referenceText}>#TM-987654</TextView>
              <TextView textSty={styles.title}>
                The trademark being registered
              </TextView>
              <View style={styles.statusContainer}>
                <TextView textSty={styles.dateText}>DEC 1, 2024</TextView>
                <View style={styles.statusBadge}>
                  <TextView textSty={styles.statusText}>Approved</TextView>
                </View>
              </View>
            </View>
            <View style={styles.line} />
            {/* Application Overview Section */}
            <View style={styles.section}>
              <TextView textSty={styles.sectionTitle}>
                Application Overview
              </TextView>
              <View style={styles.row}>
                <TextView textSty={styles.label}>Business Name</TextView>
                <TextView textSty={styles.value}>Company LTD.</TextView>
              </View>
              <View style={styles.row}>
                <TextView textSty={styles.label}>Trademark Type</TextView>
                <TextView textSty={styles.value}>Typography</TextView>
              </View>
              <View style={styles.row}>
                <TextView textSty={styles.label}>Representation</TextView>
                <TextView textSty={styles.value}>Lorem ipsum</TextView>
              </View>
              <View style={styles.row}>
                <TextView textSty={styles.label}>Classification</TextView>
                <TextView textSty={styles.value}>No</TextView>
              </View>
              <View style={styles.row}>
                <TextView textSty={styles.label}>Case Sensitive</TextView>
                <TextView textSty={styles.value}>Yes</TextView>
              </View>
            </View>

            {/* Download Button */}
            <TouchableOpacity style={styles.downloadButton}>
              <TextView textSty={styles.downloadButtonText}>
                📄 Download Invoice
              </TextView>
            </TouchableOpacity>

            {/* Attachments Section */}
            <View style={styles.section}>
              <View style={styles.line} />
              <TextView style={styles.sectionTitle}>Attachments</TextView>
              <FlatList
                data={attachments}
                renderItem={renderAttachment}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.attachmentList}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Applicationdetail;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    marginHorizontal: 16,
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
    fontSize: 12,
    lineHeight: 16.39,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    lineHeight: 40,
    color: Colors.gray3,
    fontFamily: FontFamily.Medium,
  },
  value: {
    fontSize: 14,
    lineHeight: 40,
    color: Colors.gray3,
    fontFamily: FontFamily.Bold,
  },
  downloadButton: {
    backgroundColor: Colors.lightMintGreen,
    // padding: 12,
    paddingVertical: 8,
    borderRadius: 40,
    alignItems: 'center',
    width: '45%',
    alignSelf: 'flex-end',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  downloadButtonText: {
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.MantisGreen,
    fontWeight: FontFamily.SemiBold,
  },
  attachmentList: {
    marginTop: 8,
  },
  attachmentImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  line: {
    borderWidth: 0.8,
    borderColor: Colors.gray5,
    marginBottom: 8,
  },
});
