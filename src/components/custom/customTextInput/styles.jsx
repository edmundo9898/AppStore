import styled from "styled-components/native";

export const InputContainer = styled.View`
  margin-bottom: 20px;
  background-color: #fff6f5;
  width: 327px;
  height: 56px;
  border-radius: 10px;
  padding: 10px 15px;
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#000",
})`
  font-size: 15px;
  width: 90%;
  margin-right: 5px;
`;

export const Icon = styled.TouchableOpacity`
  width: 10%;
  align-items: center;
  justify-content: center;
`;
