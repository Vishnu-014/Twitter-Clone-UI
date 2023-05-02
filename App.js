import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './navigation/Navigator';
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <StatusBar style='dark' />
      <Navigator />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 35,
  },
});
