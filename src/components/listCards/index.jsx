import React, { useContext, useState } from "react";
import {
  ButtonAddCart,
  Container,
  ContainerImageCard,
  ImageCard,
  NameProduct,
  PriceProduct,
  TextButtonCart,
} from "./styles";
import { View, TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function ListCards({ product }) {
  const { theme } = useContext(ThemeContext);
  const [quantity, setQuantity] = useState(0);

  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate("Detail");
  };

  const handleAddCart = () => {
    console.log(`Adicionado ao carrinho: ${product.name}`)
  };



  return (
    <Container>
      <ContainerImageCard onPress={handleDetail}>
        <ImageCard
          source={{ uri: product.image }}
          style={{ resizeMode: "cover" }}
        />

        <ButtonAddCart onPress={handleAddCart}>
          <Ionicons name="cart" size={25} color="red" />
        </ButtonAddCart>
      </ContainerImageCard>
      <NameProduct>{product.name}</NameProduct>
      <PriceProduct theme={theme}>${product.price}</PriceProduct>
    </Container>
  );
}
