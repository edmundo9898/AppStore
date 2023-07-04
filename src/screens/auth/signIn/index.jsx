import React, { useContext, useState } from "react";
import {
  Container,
  TitleSign,
  ButtonForgotLogin,
  ForgotLogin,
  LineOr,
  ContainerOr,
  TextOr,
} from "./style";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { FirebaseContext } from "../../../contexts/FirebaseProvider";
import {
  CustomTextInput,
  CustomButton,
  CustomAuthLink,
  CustomSocialButton,
} from "../../../components/custom";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const { theme, testeAlert } = useContext(ThemeContext);
  const { signIn } = useContext(FirebaseContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    signIn(userEmail, userPassword);
  };

  const handleGoSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Container theme={theme}>
      <TitleSign theme={theme}>Sign In</TitleSign>
      <CustomTextInput
        value={userEmail}
        onChangeText={(text) => setUserEmail(text)}
        placeholder="Email Address"
      />
      <CustomTextInput
        value={userPassword}
        onChangeText={setUserPassword}
        placeholder="Password"
        isPassword
      />
      <ButtonForgotLogin>
        <ForgotLogin theme={theme}>Forgot Password?</ForgotLogin>
      </ButtonForgotLogin>
      <CustomButton OnPress={handleSignIn} title="Sign In" />
      <CustomAuthLink
        title="Don’t have an account?"
        OnPress={handleGoSignUp}
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
