import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import ImagePath from '../../constant/ImagePath';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';

const Patent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        notify
        title={'Patent'}
        rightClick={() => navigation.goBack()}
        clickNotification={() => {
          // navigation.goBack();
          alert('22');
        }}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Image
            source={ImagePath.patentImg} // Replace with your image URL
            style={styles.image}
          />

          <TextView textSty={styles.description}>
            Your ideas deserve protection, and we are here to ensure that they
            remain exclusively yours. Our patent services cover everything from:
          </TextView>

          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Filing Patent Applications:</Text>{' '}
              Assistance in preparing and submitting your patent applications
              with precision.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Patent Searches:</Text> Comprehensive
              searches to ensure your invention is unique and patentable.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Patent Prosecution:</Text> Guidance
              through the legal procedures to secure your patent rights.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Patent Portfolio Management:</Text>{' '}
              Manage and track your intellectual property assets efficiently.
            </Text>
          </View>
          <Text style={styles.description}>
            Whether you're an individual inventor, a start-up, or an established
            business, we provide customized solutions to protect your
            innovations.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Patent;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    marginVertical: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    color: '#323232',
    marginBottom: 16,
    fontFamily: FontFamily.Light,
    lineHeight: 22,
  },
  bulletPoints: {
    marginBottom: 16,
  },
  bulletPoint: {
    fontSize: 15,
    color: '#323232',
    marginBottom: 8,
    fontFamily: FontFamily.Regular,
    lineHeight: 22,
  },
  bold: {
    fontFamily: FontFamily.ExtraBold,
    color: Colors.Black,
    flex: 1,
  },
});
