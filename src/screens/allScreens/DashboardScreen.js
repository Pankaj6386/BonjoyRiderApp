import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../../components/Header';
import ImagePath from '../../constant/ImagePath';
import Carousel from 'react-native-reanimated-carousel';
import Colors from '../../styles/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  CopyRight,
  DesignSVG,
  FillingIconSVG,
  PatentSVG,
  SaveChargesIcon,
  TradeMarkSVG,
} from '../../assets/svgIcons/Index';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useRouteNameContext} from '../../context/RouteNameContext';
import NavigationString from '../../Navigations/NavigationString';
import { Call_GetListServices } from '../../Services/Services';
import { GetProfile_API } from '../../config/Url';
import { saveProfileData } from '../../store/slices/auth';


const {width} = Dimensions.get('window');

const images = [ImagePath.bannerImg, ImagePath.bannerImg, ImagePath.bannerImg];

const publications = [
  {
    id: '1',
    category: 'Labor Law',
    title: 'Supreme Court Ruling on Privacy Laws',
    description:
      'The Supreme Court has ruled on a landmark case that strengthens...',
    date: '24 JAN',
    image: ImagePath.lawImage, // Replace with actual image URL
  },
  {
    id: '2',
    category: 'Labor Law',
    title: 'Supreme Court Ruling on Privacy Laws',
    description:
      'The Supreme Court has ruled on a landmark case that strengthens...',
    date: '24 JAN',
    image: ImagePath.lawImage2, // Replace with actual image URL
  },
  {
    id: '3',
    category: 'Labor Law',
    title: 'Supreme Court Ruling on Privacy Laws',
    description:
      'The Supreme Court has ruled on a landmark case that strengthens...',
    date: '24 JAN',
    image: ImagePath.lawImage3, // Replace with actual image URL
  },
];

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const {setCurrentRouteName} = useRouteNameContext();

  const services = [
    {
      title: 'Trade Mark',
      icon: <TradeMarkSVG />,
      nav: NavigationString.TrademarkScreen,
    },
    {title: 'Patent', icon: <PatentSVG />, nav: NavigationString.PatentScreen},
    {title: 'Design', icon: <DesignSVG />, nav: NavigationString.DesignScreen},
    {
      title: 'Copyright',
      icon: <CopyRight />,
      nav: NavigationString.CopyRightScreen,
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(NavigationString.PublicationDetailsScreen);
      }}
      style={styles.Publicationcard}>
      <Image source={item.image} style={styles.Publicationimage} />

      <View style={styles.Publicationcontent}>
        <TextView textSty={styles.Publicationcategory}>
          {item.category}
        </TextView>
        <TextView heading headingTextSty={styles.Publicationtitle}>
          {item.title}
        </TextView>
        <TextView textSty={styles.Publicationdescription}>
          {item.description}
        </TextView>
      </View>
      <View style={styles.Publicationdate}>
        <TextView textSty={styles.PublicationdateDay}>
          {item.date.split(' ')[0]}
        </TextView>
        <TextView textSty={styles.PublicationdateMonth}>
          {item.date.split(' ')[1]}
        </TextView>
      </View>
    </TouchableOpacity>
  );

  const handleSideMunu = useCallback(() => {
    navigation.openDrawer();
  }, []);

  const handleNotification = useCallback(() => {
    navigation.navigate(NavigationString.NotificationScreen);
  }, []);

    useEffect(()=>{
      getProfile()
    },[])
  
    const getProfile=useCallback(async()=>{
      const response = await Call_GetListServices(GetProfile_API)
      console.log('----profile data---',response)
      if(response?.success){
        // setManageProfile(response?.data)
        dispatch(saveProfileData(response?.data))
      }
    },[])


  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header onPress={handleSideMunu} clickNotification={handleNotification} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          {/* Carousel View */}
          <Carousel
            loop
            width={width}
            height={200}
            autoPlay
            autoPlayInterval={3000}
            data={images}
            onSnapToItem={index => setActiveIndex(index)} // Update active dot index
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image source={item} style={styles.image} />
              </View>
            )}
          />

          {/* Custom Pagination Dots */}
          <View style={styles.pagination}>
            {images.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
                onPress={() => setActiveIndex(index)}
              />
            ))}
          </View>

          {/* Card Container */}
          <View style={styles.cardContainer}>
            {/* Card 1 */}
            <LinearGradient
              colors={['#007F86', '#64B560']}
              start={{x: 0, y: 0}} // Start of the gradient (left side)
              end={{x: 1, y: 0}} // End of the gradient (right side)
              style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationString.ApplicationScreen);
                }}
                style={{flex: 1}}>
                <View style={styles.iconContainer}>
                  <TextView heading headingTextSty={styles.number}>
                    12
                  </TextView>
                  <View style={styles.icon}>
                    <FillingIconSVG />
                  </View>
                </View>
                <TextView textSty={styles.title}>Billings</TextView>
              </TouchableOpacity>
            </LinearGradient>

            {/* Card 2 */}

            <LinearGradient
              colors={['#007F86', '#64B560']}
              start={{x: 0, y: 0}} // Start of the gradient (left side)
              end={{x: 1, y: 0}} // End of the gradient (right side)
              style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationString.SavedSearchScreen);
                }}
                style={{flex: 1}}>
                <View style={styles.iconContainer}>
                  <TextView heading headingTextSty={styles.number}>
                    5
                  </TextView>
                  <View style={styles.icon}>
                    <SaveChargesIcon />
                  </View>
                </View>
                <TextView textSty={styles.title}>Saved Searches</TextView>
              </TouchableOpacity>
            </LinearGradient>
          </View>

          {/* Services Container */}
          <View style={styles.servicescontainer}>
            <TextView textSty={styles.heading}>SERVICES</TextView>
            <View style={styles.grid}>
              {services.map((service, index) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(service.nav);
                  }}
                  key={index}
                  style={styles.servicescard}>
                  {service.icon}
                  <TextView textSty={styles.servicescardText}>
                    {service.title}
                  </TextView>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Publication Container */}
          <View style={styles.Publicationcontainer}>
            <View style={styles.Publicationheader}>
              <TextView heading headingTextSty={styles.Publicationheading}>
                PUBLICATIONS
              </TextView>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationString.PublicationScreen);
                }}>
                <TextView textSty={styles.PublicationviewAll}>
                  View All
                </TextView>
              </TouchableOpacity>
            </View>
            <FlatList
              nestedScrollEnabled={true}
              data={publications}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {justifyContent: 'center'},
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 30,
    backgroundColor: Colors.TealBlue, // Active dot color
  },
  inactiveDot: {
    backgroundColor: Colors['light blue'], // Inactive dot color
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 15,
  },
  card: {
    width: '48%',
    height: 100,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  number: {
    fontSize: 32,
    color: '#fff',
    lineHeight: 40,
    top: 10,
  },
  icon: {
    // width: 32,
    // height: 32,
    // marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: FontFamily.Medium,
    color: '#fff',
    // marginTop: 12,
  },

  // -----services------
  servicescontainer: {
    padding: 16,
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: Colors['Pale Aqua'],
  },
  heading: {
    fontSize: 18,
    marginBottom: 16,
    fontFamily: FontFamily.Bold,
    lineHeight: 21.33,
    textAlign: 'left',
    left: 3,
    color: Colors.Black,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  servicescard: {
    width: '45%',
    backgroundColor: Colors.White,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  servicescardText: {
    marginTop: 8,
    fontSize: 15,
    fontFamily: FontFamily.SemiBold,
    textAlign: 'center',
    color: Colors.TealBlue,
    lineHeight: 20.49,
  },
  // -------publication--------
  Publicationcontainer: {
    padding: 15,
    backgroundColor: Colors['Pale Aqua'],
    marginTop: 35,
  },
  Publicationheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  Publicationheading: {
    color: Colors.Black,
    lineHeight: 24.59,
  },
  PublicationviewAll: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.TealBlue,
    fontFamily: FontFamily.Medium,
  },
  Publicationlist: {
    paddingBottom: 16,
  },
  Publicationcard: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  Publicationimage: {
    width: 100,
    height: 110,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  Publicationcontent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  Publicationcategory: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors['Dim Gray'],
    marginBottom: 4,
  },
  Publicationtitle: {
    fontSize: 13,
    lineHeight: 17,
    color: Colors.Black,
    marginBottom: 4,
  },
  Publicationdescription: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.Jet,
    marginBottom: 4,
  },
  Publicationdate: {
    // position: 'absolute',
    width: 40,
    height: 40,
    right: 10,
    top: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00796B',
    padding: 8,
    borderRadius: 8,
  },
  PublicationdateDay: {
    fontSize: 10,
    lineHeight: 10,
    color: Colors.White,
  },
  PublicationdateMonth: {
    fontSize: 10,
    lineHeight: 10,
    marginTop: 5,
    color: Colors.White,
  },
});
