import React, { useContext, useState } from "react";
import {
  Container,
  TitleSign,
  ContainerOr,
  LineOr,
  TextOr,
} from "../signIn/style";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { FirebaseContext } from "../../../contexts/FirebaseProvider";
import { auth } from "../../../services/firebase.config";
import {
  CustomTextInput,
  CustomButton,
  CustomAuthLink,
  CustomSocialButton,
} from "../../../components/custom";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const { theme,} = useContext(ThemeContext);
  const {signUp} = useContext(FirebaseContext)
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPass, setUserConfirmPass] = useState("");

  const handleSignUp = () => {
    signUp(name, userEmail, userPassword, userConfirmPass);
    setName("");
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPass("");
  }
  
  const backSignIn = () => {
    navigation.goBack();
  };
  return (
    <Container theme={theme}>
      <TitleSign theme={theme}>Sign Up</TitleSign>
      <CustomTextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <CustomTextInput
        value={userEmail}
        onChangeText={setUserEmail}
        placeholder="Email Address"
      />
      <CustomTextInput
        value={userPassword}
        onChangeText={setUserPassword}
        placeholder="Password"
        isPassword
      />
      <CustomTextInput
        value={userConfirmPass}
        onChangeText={setUserConfirmPass}
        placeholder="Password"
        isPassword
      />

      <CustomButton OnPress={handleSignUp} title="Sign Up" />
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
