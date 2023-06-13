import React, { useContext } from "react";
import { SocialButtom, SocialTextButtom } from "./styles";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { FontAwesome5 } from "@expo/vector-icons";

export const CustomSocialButton = ({
  OnPress,
  Icon,
  SizeIcon,
  ColorIcon,
  Title,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SocialButtom theme={theme} onPress={OnPress}>
      <FontAwesome5 name={Icon} size={SizeIcon} color={ColorIcon} />
      <SocialTextButtom theme={theme}>{Title}</SocialTextButtom>
    </SocialButtom>
  );
};
