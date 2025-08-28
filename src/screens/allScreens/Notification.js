import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useCallback} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import {useNavigation} from '@react-navigation/native';
import {hideTab} from '../../store/slices/auth';
import {useDispatch} from 'react-redux';
// import {useRouteNameContext} from '../../context/RouteNameContext';
import TextView from '../../components/TextView';
import ImagePath from '../../constant/ImagePath';
import {ProfileIconSVG, ProfileImageSVG} from '../../assets/svgIcons/Index';

const notifications = [
  {
    id: '1',
    title: 'LEGAL TIP OF THE DAY!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '2',
    title: 'LEGAL TIP OF THE DAY!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '3',
    title: 'STAY PROTECTED ONLINE!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '4',
    title: 'LEGAL TIP OF THE DAY!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '5',
    title: 'LEGAL TIP OF THE DAY!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '6',
    title: 'UNDERSTANDING LAWS!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
  {
    id: '7',
    title: 'LEGAL TIP OF THE DAY!',
    date: 'Dec 16, 2024',
    image: <ProfileImageSVG />,
    description:
      'Your notification will appear here once you’ve received them.',
  },
];

const NotificationItem = ({title, date, image, description}) => (
  <View style={styles.card}>
    {/* <Image source={image} style={styles.image} /> */}
    {image}
    <View style={styles.content}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 0.75}}>
          <TextView heading headingTextSty={styles.title}>
            {title}
          </TextView>
        </View>
        <View style={{flex: 0.25}}>
          <TextView textSty={styles.date}>{date}</TextView>
        </View>
      </View>
      <TextView textSty={styles.description}>{description}</TextView>
    </View>
  </View>
);

const Notification = ({navigation}) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBack = () => {
    // alert('432');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header
        rightClick={() => {
          handleBack();
        }}
        radius
        arrowBack
        title={'Notifications'}
      />

      <View style={styles.container}>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NotificationItem
              title={item.title}
              date={item.date}
              image={item.image}
              description={item.description}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
    left: 5,
    // paddingHorizontal: 8,
  },
  title: {
    fontSize: 13,
    color: Colors.Black,
    marginBottom: 5,
    lineHeight: 17.76,
  },
  date: {
    fontSize: 10,
    color: Colors.gray3,
    marginBottom: 5,
    lineHeight: 14,
  },
  description: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.gray3,
  },
});
