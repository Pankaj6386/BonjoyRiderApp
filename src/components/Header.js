import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {
  ArrowSVG,
  EditIconSVG,
  HeaderNotificationIconSVG,
  LocationIconSVG,
  SideMenuIconSVG,
} from '../assets/svgIcons/Index';
import TextView from './TextView';
import FontFamily from '../styles/FontFamily';
import Colors from '../styles/Colors';

const Header = ({
  arrowBack,
  title,
  notify,
  radius,
  onPress,
  clickNotification,
  rightClick,
  clickEditProfile,
  editProfileimg,
}) => {

  return (
    <View
      style={{
        ...styles.container,
        // padding: arrowBack ? 25 : 18,
        // borderBottomLeftRadius: radius ? 20 : 0,
        // borderBottomRightRadius: radius ? 20 : 0,
      }}>
      {/* Menu Icon */}
      {arrowBack ? (
        <TouchableOpacity onPress={rightClick} style={styles.menuIcon}>
          <ArrowSVG />
        </TouchableOpacity>
      ) : (
        // <View style={{backgroundColor:'red'}}>
        //   <Text>5</Text>
        // </View>

        <TouchableOpacity onPress={onPress} style={styles.menuIcon}>
          <SideMenuIconSVG />
        </TouchableOpacity>
      )}

      {/* Location Info */}
      {/* {arrowBack ? (
        <View style={{...styles.locationContainer, marginLeft: 0}}>
          <TextView
            heading
            headingTextSty={{
              ...styles.locationTitle,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            {title}
          </TextView>
        </View>
      ) : title == 'Publications' ? (
        <View style={{...styles.locationContainer, marginLeft: 0}}>
          <TextView
            heading
            headingTextSty={{
              ...styles.locationTitle,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            {title}
          </TextView>
        </View>
      ) : (
        <View style={styles.locationContainer}>
          <TextView heading headingTextSty={styles.locationTitle}>
            GAUTENG
          </TextView>
          <TextView textSty={styles.locationAddress}>
            22 RUE BERGERE, 75009
          </TextView>
        </View>
      )} */}
      {/* Icons Section */}
      {arrowBack ? (
        <View style={styles.iconGroup}>
          {/* Notification Icon */}
          {notify && (
            <TouchableOpacity
              onPress={clickNotification}
              style={{...styles.iconButton, height: 0, top: -18}}>
              <HeaderNotificationIconSVG />
              {/* Notification Badge */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </TouchableOpacity>
          )}
          {editProfileimg && (
            <TouchableOpacity onPress={clickEditProfile}>
              <EditIconSVG />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.iconGroup}>
          {/* Location Icon */}
          {/* {title !== 'Publications' && (
            <TouchableOpacity style={styles.iconButton}>
              <LocationIconSVG />
            </TouchableOpacity>
          )} */}

          {/* Notification Icon */}
          {/* <TouchableOpacity
            onPress={clickNotification}
            style={styles.iconButton}>
            <HeaderNotificationIconSVG />
       
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White, // Adjust color to match the design
    padding: 14,
    paddingHorizontal: 15,
    borderRadius:8
  },
  menuIcon: {
    marginRight: 10,
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  locationTitle: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 20.49,
  },
  locationAddress: {
    fontFamily: FontFamily.Light,
    color: '#fff',
    fontSize: 15,
    lineHeight: 20.49,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
