import React, {useCallback, useState} from 'react';
import Header from '../../components/Header';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../styles/Colors';
import {SearchSVG} from '../../assets/svgIcons/Index';
import TextView from '../../components/TextView';
import FontFamily from '../../styles/FontFamily';
import NavigationString from '../../Navigations/NavigationString';

const trademarkData = [
  {
    id: '1',
    number: '#TM-987654',
    title: 'The trademark being registered',
    date: 'DEC 1, 2024',
    status: 'Approved',
  },
  {
    id: '2',
    number: '#TM-987654',
    title: 'The trademark being registered',
    date: 'DEC 1, 2024',
    status: 'Pending',
  },
  {
    id: '3',
    number: '#TM-987654',
    title: 'The trademark being registered',
    date: 'DEC 1, 2024',
    status: 'Approved',
  },
  {
    id: '4',
    number: '#TM-987654',
    title: 'The trademark being registered',
    date: 'DEC 1, 2024',
    status: 'Approved',
  },
];

const Application = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(trademarkData);

  const handleSearch = useCallback(
    text => {
      setSearchText(text);
      const filtered = trademarkData.filter(
        item =>
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.number.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    },
    [searchText], // Dependency array
  );

  const renderStatusBadge = status => {
    const statusStyles = {
      Approved: styles.approvedBadge,
      Pending: styles.pendingBadge,
    };

    return (
      <View style={[styles.statusBadge, statusStyles[status]]}>
        <TextView
          textSty={{
            ...styles.statusText,
            color: status == 'Approved' ? '#64B560' : '#A6AB04',
          }}>
          {status}
        </TextView>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(NavigationString.ApplicationdetailScreen)
      }
      style={styles.card}>
      <TextView textSty={styles.trademarkNumber}>{item.number}</TextView>
      <TextView textSty={styles.title}>{item.title}</TextView>
      <View style={styles.footer}>
        <TextView textSty={styles.date}>{item.date}</TextView>
        {renderStatusBadge(item.status)}
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}
      <Header arrowBack title={'My Applications'} />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View
            style={{
              position: 'absolute',
              top: 30,
              right: 30,
              zIndex: 999,
              alignItems: 'flex-end',
            }}>
            <SearchSVG />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearch}
          />

          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
            nestedScrollEnabled={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Application;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {justifyContent: 'center', padding: 16},
  searchInput: {
    paddingRight: 35,
    backgroundColor: Colors.White,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
    lineHeight: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  trademarkNumber: {
    fontSize: 12,
    lineHeight: 16.39,
    color: Colors.gray,
    marginBottom: 4,
    fontFamily: FontFamily.Medium,
  },
  title: {
    fontSize: 15,
    lineHeight: 20.49,
    fontFamily: FontFamily.Bold,
    color: Colors.gray1,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    lineHeight: 16.39,
    fontFamily: FontFamily.Medium,
    color: Colors.gray,
  },
  statusBadge: {
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderRadius: 12,
  },
  approvedBadge: {
    backgroundColor: '#E6F4EA',
  },
  pendingBadge: {
    backgroundColor: '#FFF8E1',
  },
  statusText: {
    fontSize: 12,
    fontFamily: FontFamily.SemiBold,
    lineHeight: 16.39,
    color: '#4CAF50',
  },
});
