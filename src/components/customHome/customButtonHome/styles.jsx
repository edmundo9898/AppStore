import styled from "styled-components/native";


export const Button = styled.TouchableOpacity`
width: 70px;
height: 45px;
border-radius: 10px;
border-width: 1px;
border-color: #c4bebe;
background-color: ${(props) => (props.focused ? "#000" : "#fff")};
padding: 5px;
align-items: center;
justify-content: center;

  
`;

export const TextButton = styled.Text`
font-size: 13px;
font-weight: bold;
color: ${(props) => (props.focused ? "#fff" : "#000")};

 
`;
