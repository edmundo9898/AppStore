import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container, Text} from './styles'
import ThemeContext from '../../contexts/ThemeContext';

export default function Cart() {
     

    const {theme} = useContext(ThemeContext)
    const navigation = useNavigation();




 return (
   <Container theme={theme}>
    <TouchableOpacity onPress={handleDetail}>
        <Text theme={theme}>Cart</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleTheme}>
        <Text theme={theme}>Mudar de tema</Text>
    </TouchableOpacity>
   </Container>
  );
}