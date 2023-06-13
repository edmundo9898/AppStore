import styled from "styled-components/native";

export const Buttom = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.buttomColor};
  width: 327px;
  height: 56px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const TextButtom = styled.Text`
  color: ${({ theme }) => theme.color};
  font-size: 20px;
  font-weight: bold;
`;
