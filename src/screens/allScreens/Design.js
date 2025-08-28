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

const Design = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        notify
        title={'Design'}
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
            source={ImagePath.designImg} // Replace with your image URL
            style={styles.image}
          />

          <TextView textSty={styles.description}>
            Your designs are the face of your brand, and protecting them is
            crucial in today’s competitive market. We specialize in:
          </TextView>

          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Design Registration:</Text> Helping
              you legally safeguard the unique appearance of your products.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Infringement Support:</Text>{' '}
              Protecting your rights in case of unauthorized use by competitors.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Global Protection:</Text> Ensuring
              your designs are protected across multiple jurisdictions. By
              securing your designs, we enable you to maintain your competitive
              edge and enhance your brand value.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Design;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
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
