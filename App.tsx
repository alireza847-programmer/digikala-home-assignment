/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@emotion/react';
import {NavigationContainer} from '@react-navigation/native';
import RootWrapper from 'components/rootWrapper';
import React from 'react';
import {configureApiWrapper} from 'react-api-wrapper-hook';
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from 'routes/index';
import {theme} from 'themes/emotion';
import client from 'utils/api/client';

function App(): React.JSX.Element {
  configureApiWrapper(client);
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <RootWrapper>
          <Routes />
        </RootWrapper>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
