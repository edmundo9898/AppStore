import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container, Text} from './styles'
import { ThemeContext } from '../../contexts/ThemeProvider';

export default function Detail() {
     

    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation();


    const handleDetail = () => {
        navigation.goBack()
    }

 return (
   <Container theme={theme}>
    <TouchableOpacity onPress={handleDetail}>
        <Text theme={theme}>Voltar</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text theme={theme}>Mudar de tema</Text>
    </TouchableOpacity>
   </Container>
  );
}