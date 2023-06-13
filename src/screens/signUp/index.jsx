import React, { useContext } from "react";
import {
  Container,
  TitleSign,
  ContainerOr,
  LineOr,
  TextOr,
} from "../signIn/style";
import { ThemeContext } from "../../contexts/ThemeProvider";
import {
  CustomTextInput,
  CustomButton,
  CustomAuthLink,
  CustomSocialButton,
} from "../../components/custom";

import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const { theme, testeAlert } = useContext(ThemeContext);
  const navigation = useNavigation();

  const backSignIn = () => {
    navigation.goBack();
  };
  return (
    <Container theme={theme}>
      <TitleSign theme={theme}>Sign Up</TitleSign>
      <CustomTextInput placeholder="Name" />
      <CustomTextInput placeholder="Email Adress" />
      <CustomTextInput placeholder="Password" isPassword />
      <CustomTextInput placeholder="Confirm Password" isPassword />

      <CustomButton OnPress={testeAlert} title="Sign Up" />
      <CustomAuthLink
        title="Do you have an account?"
        OnPress={backSignIn}
        titleLink="Sign In"
      />
      <ContainerOr>
        <LineOr></LineOr>
        <TextOr theme={theme}>OR</TextOr>
        <LineOr></LineOr>
      </ContainerOr>
      <CustomSocialButton
        Icon="facebook"
        SizeIcon={30}
        ColorIcon={"#3b5998"}
        Title="Sign in with Facebook"
      />
      <CustomSocialButton
        Icon="google"
        SizeIcon={30}
        ColorIcon={"#db4a39"}
        Title="Sign in with Google "
      />
    </Container>
  );
}
