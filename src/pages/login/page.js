import React from 'react';

import {
  MainContainer,
  MainTouch,
  InputItem,
  AuxButtonGroup,
  AuxTouch,
  AuxView,
  ButtonText,
} from './style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <MainContainer>
        <InputItem
          placeholder="Full name"
          onChangeText={v => this.setState({ username: v })}
        />
        <InputItem
          placeholder="password"
          onChangeText={v => this.setState({ password: v })}
          secureTextEntry
        />
        <MainTouch onPress={() => this.props.navigation.navigate('home')}>
          <AuxView>
            <ButtonText>登录</ButtonText>
          </AuxView>
        </MainTouch>
        <AuxButtonGroup>
          <AuxTouch
            onPress={() => this.props.navigation.navigate('signup')}
          >
            <AuxView>
              <ButtonText>注册</ButtonText>
            </AuxView>
          </AuxTouch>
          <AuxTouch
            onPress={() => this.props.navigation.navigate('home')}
          >
            <AuxView>
              <ButtonText>游客登录</ButtonText>
            </AuxView>
          </AuxTouch>
        </AuxButtonGroup>
      </MainContainer>
    );
  }
}
