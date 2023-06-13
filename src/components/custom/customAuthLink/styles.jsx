import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin: 25px 0;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
`;
export const ButtomLink = styled.TouchableOpacity``;
export const TextLink = styled.Text`
  color: ${({ theme }) => theme.buttomColor};
  font-weight: bold;
  font-size: 18px;
`;
