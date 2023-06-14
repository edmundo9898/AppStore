import React, { useContext, useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  Container,
  ContainerButtomSearch,
  Input,
  InputContainer,
  ContainerNamesCategory,
  ContainerStylesFlatList,
} from "./styles";
import { ThemeContext } from "../../contexts/ThemeProvider";
import HeaderHome from "../../components/customHome/headerHome";
import { Feather } from "@expo/vector-icons";
import ListCards from "../../components/listCards";
import dataCategories from "../../data/dataCategories";
import products from "../../data/products";
import { CustomButtonHome } from "../../components/customHome/customButtonHome";
import { FlatList, StyleSheet } from "react-native";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const loadCategory = () => {
      if (selectedCategory === "all") {
        setFilteredProducts(products.products);
      } else {
        const filtered = products.products.filter(
          (product) => product.category === selectedCategory
        );
        setFilteredProducts(filtered);
      }
    };

    loadCategory();
  }, [selectedCategory]);

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

      <ContainerNamesCategory>
        {dataCategories.map((category) => (
          <CustomButtonHome
            key={category.id}
            onPress={() => handleCategorySelect(category.name)}
            categoryName={category.name}
          />
        ))}
      </ContainerNamesCategory>

      <FlatList
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListCards product={item} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  flatListContent: {
     width: '100%',
     alignItems: 'center',
     justifyContent: 'center',
     paddingStart: 10,
     paddingEnd: 10
 },
});
