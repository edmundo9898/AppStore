import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${({theme}) => theme.background};
padding: 10px;

`;

export const InputContainer = styled.View`
width: 100%;
height: 50px;
margin-top: 5px;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#837f7f"
})`
width: 70%;
height: 100%;
border-width: 2px;
border-color: #e4ede6;
border-radius: 5px;
padding-left: 15px;
margin-right: 20px;
font-size: 17px

`;

export const ContainerButtomSearch = styled.TouchableOpacity`
width: 15%;
height: 90%;
background-color: black;
align-items: center;
justify-content: center;
border-radius: 10px;
`;
export const Text = styled.Text`
color: ${({theme}) => theme.primary};
`;
