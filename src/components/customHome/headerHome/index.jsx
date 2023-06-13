import React from "react";
import { Container, ContainerHiName, TextHiName,TimeOfDay, ContainerProfile, Profile } from "./styles";

export default function HeaderHome() {
  return (
    <Container>
      <ContainerHiName>
        <TextHiName>Hi, Edmundo</TextHiName>
        <TimeOfDay>Good Morning!</TimeOfDay>
      </ContainerHiName>
      <ContainerProfile>
        <Profile source={{uri: "https://tm.ibxk.com.br/2015/09/09/09165955100389.jpg?ims=1200x675"}} />
      </ContainerProfile>
    </Container>
  );
}
