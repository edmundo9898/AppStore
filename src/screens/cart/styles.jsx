import styled from "styled-components/native";


export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.background};
align-items: center;
justify-content: center;
    

`;

export const Text = styled.Text`
color: ${({theme}) => theme.color};
`;
