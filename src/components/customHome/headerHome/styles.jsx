import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
width: 100%;
height: 90px;

flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px 15px 5px 30px;
`;

export const ContainerHiName = styled.View`
width: 200px;
height: 50px;
padding: 10px;
align-items: flex-start;
justify-content: center;
`;
export const TextHiName = styled.Text`
font-weight: bold;
font-size: 15px;
`;
export const TimeOfDay = styled.Text`
font-weight: bold;
font-size: 18px;
`;
export const ContainerProfile = styled.TouchableOpacity`
width: 60px;
height: 60px;
border-width: 1px;
border-radius: 50px;
`;
export const Profile = styled.Image`
width: 100%;
height: 100%;
border-radius: 50px;
`;


