import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './components/Counter';
import {CustomStatusBar} from './components/CustomStatusBar';

import Colors from './styles/Colors';
import Routes from './Navigations/Routes';

const index = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        {/* <CustomStatusBar backgroundColor={Colors.White} /> */}
        <Routes />
        {/* <Counter /> */}
        {/* <Text style={{fontFamily: 'Manrope-Medium', fontSize: 25}}>index2</Text> */}
      </Provider>
    </SafeAreaProvider>
  );
};

export default index;

