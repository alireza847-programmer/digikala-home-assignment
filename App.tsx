/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from 'routes/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Routes />
    </SafeAreaView>
  );
}

export default App;
