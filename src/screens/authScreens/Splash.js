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





import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import ImagePath from "../../constant/ImagePath";
import NavigationString from "../../Navigations/NavigationString";

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={ImagePath.splashTopRight} // replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Title */}
      <Text style={styles.title}>BONJOY</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>
        Effortless, Eco-Friendly, {"\n"}Exhilarating – Bon Joy Awaits!
      </Text>

      {/* Continue Button */}
      <TouchableOpacity 
      onPress={()=>navigation.navigate(NavigationString.LoginScreen)}
      style={styles.button}>
        <Text style={styles.buttonText}>Continue with Phone Number</Text>
      </TouchableOpacity>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By continuing, you agree that you have read and accept our{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://your-link.com/terms")}
        >
          T&C
        </Text>{" "}
        and{" "}
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://your-link.com/privacy")}
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
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "#2d2d46",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
  link: {
    color: "#2d2d9f",
    textDecorationLine: "underline",
  },
});
