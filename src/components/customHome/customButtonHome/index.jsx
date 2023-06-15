import React, { useState } from "react";
import { Button, TextButton } from "./styles";

export const CustomButtonHome = ({
  onPress,
  categoryName,
  onFocus,
  onBlur,
  focused,
}) => {
  return (
    <Button
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={onPress}
      focused={focused}
      activeOpacity={0.8}
    >
      <TextButton focused={focused}>{categoryName}</TextButton>
    </Button>
  );
};
