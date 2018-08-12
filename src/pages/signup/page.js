import React from 'react';

import {
  MainContainer,
  HeaderView,
  HeaderTouch,
  HeaderItemView,
  HeaderText,
  MainInputView,
  CaptchaView,
  CaptchaTouch,
  CaptchaInput,
  CaptchaText,
  FullWidthInput,
  SubmitTouch,
  SubmitText,
} from './style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      captcha: '',
      password: '',
      passwordAgain: '',
      studentActive: true,
    };
  }

  submit = () => {
  }

  sendCaptcha = () => {}

  render() {
    const { phone, password, passwordAgain } = this.state;
    const captchaDisable = !phone || String(phone).length < 11;
    const canSubmit = (
      phone && String(phone).length === 11 &&
      captcha &&
      password && password === passwordAgain
    );
    return (
      <MainContainer>
        <HeaderView>
          <HeaderTouch
            active={this.state.studentActive}
            onPress={() => this.setState({ studentActive: true })}
          >
            <HeaderItemView>
              <HeaderText active={this.state.studentActive}>我是学生</HeaderText>
            </HeaderItemView>
          </HeaderTouch>
          <HeaderTouch
            active={!this.state.studentActive}
            onPress={() => this.setState({ studentActive: false })}
          >
            <HeaderItemView>
              <HeaderText active={!this.state.studentActive}>我是老师</HeaderText>
            </HeaderItemView>
          </HeaderTouch>
        </HeaderView>
        <MainInputView>
          <FullWidthInput
            placeholder="手机号码"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={v => this.setState({ phone: v })}
          />
          <CaptchaView>
            <CaptchaInput
              placeholder="手机验证码"
              onChangeText={v => this.setState({ captcha: v })}
            />
            <CaptchaTouch
              onPress={this.sendCaptcha}
              disabled={captchaDisable}
            >
              <CaptchaText>发送验证码</CaptchaText>
            </CaptchaTouch>
          </CaptchaView>
          <FullWidthInput
            placeholder="密码"
            secureTextEntry
            onChangeText={v => this.setState({ password: v })}
          />
          <FullWidthInput
            placeholder="确认密码"
            secureTextEntry
            onChangeText={v => this.setState({ passwordAgain: v })}
          />
        </MainInputView>
        <SubmitTouch
          onPress={this.submit}
          disabled={!canSubmit}
        >
          <SubmitText>同意研帮协议并注册</SubmitText>
        </SubmitTouch>
      </MainContainer>
    );
  }
}
