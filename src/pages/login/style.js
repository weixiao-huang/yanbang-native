import styled from 'styled-components/native';

const buttonMargin = 12;

export const MainContainer = styled.View`
  flex: 1;
  background-color: #455357;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

export const InputItem = styled.TextInput`
  background-color: white;
  width: 100%;
  margin: 10px 0 10px 0;
  padding: ${buttonMargin}px;
`;

export const MainTouch = styled.TouchableOpacity`
  background-color: #7c8d93;
  width: 100%;
  padding: ${buttonMargin}px;
  margin: 20px 0 20px 0;
`;

export const AuxButtonGroup = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const AuxTouch = styled.TouchableOpacity`
  background-color: #7c8d93;
  width: 45%;
  padding: ${buttonMargin}px;
`

export const AuxView = styled.View`
  width: 100%;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: white;
`;
