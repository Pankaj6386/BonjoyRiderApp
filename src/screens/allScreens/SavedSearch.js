import {
  FlatList,
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
import {CrossIsonSVG} from '../../assets/svgIcons/Index';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';

const SavedSearch = ({navigation}) => {
  const [searchResults, setSearchResults] = useState([
    {id: '1', name: 'Sanders', status: 'Available'},
    {id: '2', name: 'Sanders', status: 'Available'},
    {id: '3', name: 'Sanders', status: 'Available'},
    {id: '4', name: 'Sanders', status: 'Available'},
    {id: '5', name: 'Sanders', status: 'Available'},
    {id: '6', name: 'Sanders', status: 'Available'},
  ]);

  const handleDelete = id => {
    setSearchResults(prevResults => prevResults.filter(item => item.id !== id));
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <TextView textSty={styles.itemName}>{item.name}</TextView>
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <TextView textSty={styles.statusText}>{item.status}</TextView>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <CrossIsonSVG color={Colors.crossColor} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        title={'Saved Search'}
        rightClick={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <FlatList
            data={searchResults}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedSearch;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    // justifyContent: 'center',
    // marginHorizontal: 16,
    margin: 18,
  },

  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    marginTop: 5,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    lineHeight: 19.12,
    fontFamily: FontFamily.Bold,
    color: Colors.gray4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.MantisGreen,
    marginRight: 6,
  },
  statusText: {
    fontFamily: FontFamily.Medium,
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.MantisGreen,
  },
});
