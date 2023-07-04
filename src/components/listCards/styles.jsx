import styled from "styled-components/native";


export const Container = styled.View`
width: 45%;
margin: 15px 10px ;
height: 300px;
align-items: center;
justify-items: center;
background-color: #f8f4f4;
border-radius: 15px;
`;

export const ContainerImageCard = styled.TouchableOpacity`
position: relative;
width: 100%;
height: 70%;
margin-bottom: 15px;
`;
export const ImageCard = styled.Image`
width: 100%;
height: 100%;
border-top-right-radius: 20px;
border-top-left-radius: 20px;

`;

export const ButtonAddCart = styled.TouchableOpacity`
position: absolute;
top: 20px;
left: 120px;
width: 40px;
height: 40px;
background-color: #fff;
border-radius: 20px;
align-items: center;
justify-content: center;
z-index: 99;
`;


export const NameProduct = styled.Text`
color: #383737;
font-weight: bold;
margin: 5px 0;
font-size: 15px;

`;
export const PriceProduct = styled.Text`
color: ${({theme}) => theme.secondary};
font-weight: bold;

`;