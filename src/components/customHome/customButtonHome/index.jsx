import React from "react";
import { Button, TextButton } from "./styles";

export const CustomButtonHome = ({ onPress, categoryName }) => {
  return (

      <Button onPress={onPress}>
        <TextButton>{categoryName}</TextButton>
      </Button>
  );
};
