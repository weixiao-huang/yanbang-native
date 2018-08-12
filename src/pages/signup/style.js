import styled, { css } from 'styled-components/native';

const inputPadding = 12;
const inputMargin = 20;

const CommonPM = css`
  padding: ${inputPadding}px;
  margin-top: ${inputMargin}px;
`

export const MainContainer = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

export const HeaderView = styled.View`
  flex-direction: row;
`;

export const HeaderTouch = styled.TouchableOpacity`
  background-color: ${props => props.active ? '#7c8d93' : '#cfd8dc'};
  padding: ${inputPadding}px;
  width: 50%;
`;

export const HeaderItemView = styled.View`
  width: 100%;
  align-items: center;
`;

export const HeaderText = styled.Text`
  color: ${props => props.active ? 'white' : '#7c8d93'};
`


export const MainInputView = styled.View`
  width: 100%;
`;

export const FullWidthInput = styled.TextInput`
  ${CommonPM}
  width: 100%;
  background-color: white;
`;

export const CaptchaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CaptchaInput = styled.TextInput`
  ${CommonPM}
  background-color: white;
  width: 55%;
`;

export const CaptchaTouch = styled.TouchableOpacity`
  ${CommonPM}
  width: 40%;
  background: #cfd8dc;
  border-radius: 3px;
  opacity: ${props => props.disabled ? 0.3 : 1};
`;

export const CaptchaText = styled.Text`
  width: 100%;
  text-align: center;
  color: #7c8d93;
`;

export const SubmitTouch = styled.TouchableOpacity`
  ${CommonPM}
  width: 100%;
  background-color: #7c8d93;
  border-radius: 3px;
  opacity: ${props => props.disabled ? 0.3 : 1};
`;

export const SubmitText = styled.Text`
  width: 100%;
  text-align: center;
  color: white;
`;
