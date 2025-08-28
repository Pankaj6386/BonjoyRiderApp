import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import TextView from '../../components/TextView';
import InputFields from '../../components/InputFields';
import Button from '../../components/Button';
import AllString from '../../constant/AllString';
import FontFamily from '../../styles/FontFamily';
import CustomCheckbox from '../../components/CustomCheckbox';

const TrademarkSearch = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleDeleteHistory = item => {
    setSearchHistory(prevHistory =>
      prevHistory.filter(history => history !== item),
    );
  };

  const toggleSaveSearch = () => {
    setIsSaved(!isSaved);
    if (!isSaved) {
      Alert.alert('Saved', `Search for "${searchQuery}" has been saved.`);
    }
  };

  const handleSearch = useCallback(() => {
    // dispatch(saveUserData({name: 'user'}));
    if (!searchQuery) {
      Alert.alert('Error', 'Please enter a search query.');
      return;
    }

    // Mocking search results
    const isAvailable = Math.random() > 0.5;

    setResult({
      query: searchQuery,
      isAvailable,
    });

    setSearchHistory(prevHistory =>
      prevHistory.includes(searchQuery)
        ? prevHistory
        : [...prevHistory, searchQuery],
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.safeView}>
      {/* Header View */}

      <Header
        arrowBack
        title={'Trademark Search'}
        rightClick={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        nestedScrollEnabled={true}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#01778112',
              paddingHorizontal: 15,
              paddingVertical: 25,
              borderRadius: 10,
              marginTop: 30,
            }}>
            <TextView
              textSty={{
                fontFamily: FontFamily.Bold,
                fontSize: 12,
                lineHeight: 16.39,
                color: Colors.gray4,
                marginBottom: 10,
              }}>
              Search
            </TextView>
            <InputFields
              value={searchQuery}
              onChangeText={setSearchQuery}
              simpleField
              search
              placeholder={'Lorem'}
              fieldStyle={{
                height: 45,
                width: '90%',
                left: 6,
              }}
            />

            <Button
              onClick={() => handleSearch()}
              btnName={AllString.Search}
              buttonColor={Colors.White}
              allButtonSty={styles.loginBtnSty}
            />
          </View>

          <View>
            {/* Result */}
            {result && (
              <View style={styles.resultContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextView
                    heading
                    headingTextSty={{
                      ...styles.resultText,
                      color: result.isAvailable
                        ? Colors.MantisGreen
                        : Colors.MintRed,
                    }}>
                    "{result.query}"{' '}
                  </TextView>
                  <TextView
                    textSty={{
                      ...styles.resultText,
                      fontFamily: FontFamily.Bold,
                      color: result.isAvailable
                        ? Colors.MantisGreen
                        : Colors.MintRed,
                    }}>
                    is{' '}
                    {result.isAvailable ? 'available 😊' : 'not available 😟'}
                  </TextView>
                </View>

                <View style={styles.saveContainer}>
                  <TextView
                    textSty={{
                      fontSize: 14,
                      lineHeight: 19.12,
                      marginRight: 15,
                    }}>
                    Add to saved searches
                  </TextView>
                  <CustomCheckbox
                    isChecked={isSaved}
                    onPress={toggleSaveSearch}
                  />
                </View>
              </View>
            )}
          </View>
          {searchHistory.length != 0 && (
            <View
              style={{
                backgroundColor: '#01778112',
                marginTop: 25,
                padding: 16,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              {/* Search History */}
              <TextView heading headingTextSty={styles.historyTitle}>
                SEARCH HISTORY
              </TextView>
              <FlatList
                data={searchHistory}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <>
                    <View
                      style={{borderTopWidth: 1, borderTopColor: '#CFE1E3'}}
                    />
                    <View style={styles.historyItem}>
                      <Text>{item}</Text>
                      <TouchableOpacity
                        onPress={() => handleDeleteHistory(item)}>
                        <Text style={styles.deleteText}>X</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrademarkSearch;

const styles = StyleSheet.create({
  safeView: {flex: 1, backgroundColor: Colors.bgColor},
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginHorizontal: 16,
  },
  loginBtnSty: {
    backgroundColor: Colors.TealBlue,
    marginHorizontal: 0,
    paddingVertical: 14,
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: Colors.White,
  },
  resultContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: Colors.White,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    // elevation: 2,
  },
  resultText: {
    fontSize: 18,
    lineHeight: 24.59,
    // fontWeight: 'bold',
  },
  saveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    // justifyContent: 'space-between',
  },
  historyTitle: {
    fontSize: 14,
    lineHeight: 19.12,
    color: Colors.TealBlue,
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // padding: 8,
    // backgroundColor: '#fff',
    // borderRadius: 4,
    // marginBottom: 8,
    // elevation: 1,
  },
  deleteText: {
    color: '#494949',
    fontWeight: 'bold',
  },
});
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import CustomCheckbox from '../../components/CustomCheckbox';

// const TrademarkSearch = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [result, setResult] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);

//   const handleSearch = () => {
//     if (!searchQuery) {
//       Alert.alert('Error', 'Please enter a search query.');
//       return;
//     }

//     // Mocking search results
//     const isAvailable = Math.random() > 0.5;

//     setResult({
//       query: searchQuery,
//       isAvailable,
//     });

//     setSearchHistory(prevHistory =>
//       prevHistory.includes(searchQuery)
//         ? prevHistory
//         : [...prevHistory, searchQuery],
//     );
//   };

//   const handleDeleteHistory = item => {
//     setSearchHistory(prevHistory =>
//       prevHistory.filter(history => history !== item),
//     );
//   };

//   const toggleSaveSearch = () => {
//     setIsSaved(!isSaved);
//     if (!isSaved) {
//       Alert.alert('Saved', `Search for "${searchQuery}" has been saved.`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>TRADEMARK SEARCH</Text>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.input}
//         placeholder="Search"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />
//       <Button title="SEARCH" onPress={handleSearch} />

//       {/* Result */}
//       {result && (
//         <View style={styles.resultContainer}>
//           <Text
//             style={{
//               ...styles.resultText,
//               color: result.isAvailable ? 'green' : 'red',
//             }}>
//             "{result.query}" is{' '}
//             {result.isAvailable ? 'available 😊' : 'not available 😟'}
//           </Text>
//           <View style={styles.saveContainer}>
//             <Text>Add to saved searches</Text>
//             <CustomCheckbox isChecked={isSaved} onPress={toggleSaveSearch} />
//           </View>
//         </View>
//       )}

//       {/* Search History */}
//       <Text style={styles.historyTitle}>SEARCH HISTORY</Text>
//       <FlatList
//         data={searchHistory}
//         keyExtractor={item => item}
//         renderItem={({item}) => (
//           <View style={styles.historyItem}>
//             <Text>{item}</Text>
//             <TouchableOpacity onPress={() => handleDeleteHistory(item)}>
//               <Text style={styles.deleteText}>X</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     borderRadius: 4,
//     marginBottom: 16,
//     backgroundColor: '#fff',
//   },
//   resultContainer: {
//     marginTop: 16,
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 4,
//     elevation: 2,
//   },
//   resultText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   saveContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//     justifyContent: 'space-between',
//   },
//   historyTitle: {
//     marginTop: 24,
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   historyItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 8,
//     backgroundColor: '#fff',
//     borderRadius: 4,
//     marginBottom: 8,
//     elevation: 1,
//   },
//   deleteText: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
// });

// export default TrademarkSearch;
