import React, { useContext, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerButtomSearch,
  Input,
  InputContainer,
} from "./styles";
import { ThemeContext } from "../../contexts/ThemeProvider";
import HeaderHome from "../../components/customHome/headerHome";
import { CustomButtonHome } from "../../components/customHome/customButtonHome";
import { Feather } from "@expo/vector-icons";
import ProductsItem from "../../components/productsItem";
import dataCategories from "../../data/dataCategories";
import products from "../../data/products";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.products.filter(
    (products) => products.category === selectedCategory
  );

  const navigation = useNavigation();

  return (
    <Container theme={theme}>
      <HeaderHome />
      <InputContainer>
        <Input placeholder="Search" />
        <ContainerButtomSearch>
          <Feather name="search" size={25} color="white" />
        </ContainerButtomSearch>
      </InputContainer>
      <CustomButtonHome title="Olá"></CustomButtonHome>
      {dataCategories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => handleCategorySelect(category.name)}
        >
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
      <FlatList
        numColumns={3}
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductsItem product={item} />}
      />
    </Container>
  );
}
