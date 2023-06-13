import React, { useState } from "react";
import { InputContainer, Input, Icon } from "./styles";
import { Feather } from "@expo/vector-icons";

export const CustomTextInput = ({ value, onChangeText, placeholder, isPassword }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisible = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <InputContainer>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isPasswordVisible}
      />
      {isPassword && (
        <Icon onPress={togglePasswordVisible}>
        <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={20} color="black" />
      </Icon> 
      )}
       
    </InputContainer>
  );
};
