import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import {
  MainContainer,
} from './style';

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
          <Text>
            Go to Home
          </Text>
        </TouchableOpacity>
      </MainContainer>
    );
  }
}
