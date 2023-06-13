import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

export const TitleSign = styled.Text`
  color: ${({ theme }) => theme.secondary};
  font-size: 24px;
  margin: 20px 0;
  font-weight: bold;
`;

export const ButtonForgotLogin = styled.TouchableOpacity`
  width: 100%;
  margin: 5px 0;
  padding-left: 35px;
`;

export const ForgotLogin = styled.Text`
  color: ${({ theme }) => theme.buttomColor};
  font-size: 15px;
`;

export const ContainerOr = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const TextOr = styled.Text`
  color: ${({ theme }) => theme.primary};
  margin: 0 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const LineOr = styled.View`
  width: 135px;
  height: 2px;
  background-color: #000;
`;
