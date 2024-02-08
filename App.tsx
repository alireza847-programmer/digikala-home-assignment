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
import {SafeAreaView, StyleSheet} from 'react-native';
import Routes from 'routes/index';
import {theme} from 'themes/emotion';

function App(): React.JSX.Element {
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
