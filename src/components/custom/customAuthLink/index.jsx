import React, { useContext } from "react";
import { Container, Text, ButtomLink, TextLink } from "./styles";
import { ThemeContext } from "../../../contexts/ThemeProvider";

export const CustomAuthLink = ({ title, OnPress, titleLink }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Text theme={theme}>{title} </Text>
      <ButtomLink onPress={OnPress}>
        <TextLink theme={theme}>{titleLink}</TextLink>
      </ButtomLink>
    </Container>
  );
};
