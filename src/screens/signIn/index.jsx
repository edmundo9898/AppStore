import React, { useContext } from "react";
import {
  Container,
  TitleSign,
  ButtonForgotLogin,
  ForgotLogin,
  LineOr,
  ContainerOr,
  TextOr,
} from "./style";
import { ThemeContext } from "../../contexts/ThemeProvider";
import {
  CustomTextInput,
  CustomButton,
  CustomAuthLink,
  CustomSocialButton,
} from "../../components/custom";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const { theme, testeAlert } = useContext(ThemeContext);

  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container theme={theme}>
      <TitleSign theme={theme}>Sign In</TitleSign>
      <CustomTextInput
        /* value={}
    onChangeText={}
 */ placeholder="Email Address"
      />
      <CustomTextInput
        /* value={}
    onChangeText={} */
        placeholder="Password"
        isPassword
      />
      <ButtonForgotLogin>
        <ForgotLogin theme={theme}>Forgot Password?</ForgotLogin>
      </ButtonForgotLogin>
      <CustomButton OnPress={goHome} title="Sign In" />
      <CustomAuthLink
        title="Don’t have an account?"
        OnPress={handleSignUp}
        titleLink="Sign Up"
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
