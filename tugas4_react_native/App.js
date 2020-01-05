/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import {Button, Text, Header} from 'native-base';
import Contents from './Component/Contents';

const App: () => React$Node = () => {
  return (
    <View>
      <Header style={{backgroundColor: 'springgreen'}}>
        <Text style={{textAlign: 'center', marginTop: 15}}>
          KALKULATOR REACT NATIVE
        </Text>
      </Header>
      <Contents />
    </View>
  );
};

export default App;
