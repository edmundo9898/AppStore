import React, { useContext } from "react";
import { Buttom, TextButtom } from "./styles";
import { ThemeContext } from "../../../contexts/ThemeProvider";

export const CustomButton = ({ OnPress, title }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Buttom theme={theme} onPress={OnPress}>
      <TextButtom theme={theme}>{title}</TextButtom>
    </Buttom>
  );
};
