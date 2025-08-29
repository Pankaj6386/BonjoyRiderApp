// import {
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Animated,
// } from 'react-native';
// import React, {useEffect, useRef} from 'react';
// import ImagePath from '../../constant/ImagePath';
// import {useNavigation} from '@react-navigation/native';
// import NavigationString from '../../Navigations/NavigationString';

// const Splash = () => {
//   const navigation = useNavigation();
//   const fadeAnim = useRef(new Animated.Value(0)).current; // Opacity animation for fading in
//   const translateAnim = useRef(new Animated.Value(0)).current; //  Opacity animation for fading in
//   const logoAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       }),

//       Animated.timing(logoAnim, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       }),

//       Animated.timing(translateAnim, {
//         toValue: 1,
//         duration: 400,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, []);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       navigation.replace(NavigationString.IntroScreen);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View
//         style={[styles.topRight, {transform: [{scale: fadeAnim}]}]}>
//         <Image source={ImagePath.splashTopRight} />
//       </Animated.View>
//       <Animated.View
//         style={[styles.centerImg, {transform: [{scale: logoAnim}]}]}>
//         <Image source={ImagePath.splash} />
//       </Animated.View>
//       <Animated.View
//         style={[styles.bottomLeft, {transform: [{scale: translateAnim}]}]}>
//         <Image source={ImagePath.splashBottomLeft} />
//       </Animated.View>
//     </SafeAreaView>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topRight: {flex: 0.3, alignItems: 'flex-end'},
//   centerImg: {
//     flex: 0.4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bottomLeft: {flex: 0.3, justifyContent: 'flex-end'},
// });

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ImageBackground,
} from 'react-native';
import ImagePath from '../../constant/ImagePath';
import NavigationString from '../../Navigations/NavigationString';
import Colors from '../../styles/Colors';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={ImagePath.backgroundImage}
      style={{ width:'100%',height:'50%' }}>

      <Image
        source={ImagePath.splashTopRight} // replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      </ImageBackground> */}

{/* Logo */}
        <Image
          source={ImagePath.splashTopRight}
          style={styles.logo}
          resizeMode="contain"
        />
          <Image
          source={ImagePath.backgroundImage}
          style={styles.bike}
          resizeMode="contain"
        />
      {/* <ImageBackground
        source={ImagePath.backgroundImage}
        style={styles.background}
        resizeMode="contain"
      >
        
      </ImageBackground> */}

      {/* App Title */}
      <Text style={styles.title}>Welcome to BONJOY</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>
        Effortless, Eco-Friendly, Exhilarating 
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationString.LoginScreen)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
 <Text style={styles.tagline}>Login with Phone Number</Text>


      {/* Footer Text */}
      <Text style={styles.footerText}>
        By continuing, you agree that you have read and accept our{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://your-link.com/terms')}
        >
          T&C
        </Text>{' '}
        and{' '}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://your-link.com/privacy')}
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bike: {
    // flex: 1,               // take full screen
    width: '100%',
    height: '40%',
    justifyContent: 'center', // center logo vertically
    alignItems: 'center', // center logo horizontally
    // top: -20,
  },
  logo: {
    marginTop:30,
    width: 120,
    height: 120,
    // bottom:70
  },
  title: {
    marginTop:20,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginBottom:10
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#2d2d46',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    marginTop:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    fontSize: 12,
    color: Colors.Black,
    textAlign: 'center',
    marginTop: 10,
    width: '85%',
  },
  link: {
    color: Colors.Black,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
