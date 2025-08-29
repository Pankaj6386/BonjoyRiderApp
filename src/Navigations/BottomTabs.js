import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

import ImagePath from '../constant/ImagePath';
import { useRouteNameContext } from '../context/RouteNameContext';
import HomeStack from './HomeNavigation/Home';
import NavigationString from './NavigationString';

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// App Component with Navigation
const BottomTabs = () => {
  const hiddenRoutes = [NavigationString?.NotificationScreen];
  // const currentRouteName = useSelector(state => state.auth.hideBottomScreen);
  const { currentRouteName } = useRouteNameContext();

  return (
    <Tab.Navigator
      labeled={false}
      tabBar={props => (
        <BottomTabBar
          {...props}
          state={{
            ...props.state,
            // routes: props.state.routes.slice(0, 4),
          }}
        ></BottomTabBar>
      )}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      initialRouteName={NavigationString.HomeScreen}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarStyle: [
          {
            display: hiddenRoutes.includes(currentRouteName) ? 'none' : 'flex',
            height: Platform.OS === 'android' ? 55 : responsiveHeight(9),
          },
        ],
        tabBarShowLabel: false, // Hide labels
        tabBarIconStyle: {
          marginTop: Platform.OS === 'android' ? 8 : -5, // Adjust the margin to vertically center the icon
        },
      }}
    >
      <Tab.Screen
        name={NavigationString.HomeScreen}
        // component={Dashboard}
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, size, focused }) => (
            <Image
              source={ImagePath.homeIcon}
              tintColor={focused ? '#34A853' : '#000000'}
              
              style={{ width: 25, height: 25, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.ApplicationScreen}
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, size, focused }) => (
            <Image
              source={ImagePath.motorIcont}
              tintColor={focused ? '#34A853' : '#000000'}
              style={{ width: 25, height: 25, resizeMode: 'contain' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.PublicationScreen}
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, size, focused }) => (
            <Image
              source={ImagePath.accountIcont}
              tintColor={focused ? '#34A853' : '#000000'}
              style={{width: 25, height: 25,resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NavigationString.ProfilesScreen}
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, size, focused }) => (
            <Image
              source={ImagePath.walletIcont}
              tintColor={focused ? '#34A853' : '#000000'}
              style={{ width: 25, height: 25, resizeMode: 'contain' }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NavigationString.AboutUsScreen}
        component={HomeStack}
        options={{
          tabBarIcon: ({ tintColor, size, focused }) => (
            <Image
              source={ImagePath.supportIcont}
              tintColor={focused ? '#34A853' : '#000000'}
              style={{width: 25, height: 25, resizeMode: 'contain' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

// Styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
