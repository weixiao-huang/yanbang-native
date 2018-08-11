import React from 'react';
import { Text } from 'react-native';

import {
  MainContainer,
} from './style';

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Text>Home screen</Text>
      </MainContainer>
    );
  }
}
