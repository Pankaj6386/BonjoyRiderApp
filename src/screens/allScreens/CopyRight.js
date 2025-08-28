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

const CopyRight = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        notify
        title={'Copy Right'}
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
            source={ImagePath.copyrightImg} // Replace with your image URL
            style={styles.image}
          />

          <TextView textSty={styles.description}>
            Creative works deserve robust protection, whether they are artistic,
            literary, or technical. Our copyright services include:
          </TextView>

          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Copyright Registration:</Text>{' '}
              Simplified and streamlined processes to officially protect your
              work.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Licensing and Royalties:</Text>{' '}
              Assistance in granting permissions and monetizing your creative
              content.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Infringement Action:</Text> Legal
              support in enforcing your copyrights and preventing unauthorized
              use.
            </Text>

            <Text style={styles.bulletPoint}>
              • <Text style={styles.bold}>Digital Rights Management:</Text>{' '}
              Protecting your digital assets in the online landscape With our
              comprehensive copyright solutions, you can focus on creating while
              we safeguard your intellectual property.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CopyRight;

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
