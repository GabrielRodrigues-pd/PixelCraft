import React from "react";
import { Container } from "./styles";
import HeadComponent from "../HeadComponent";
import Slider from "../Slider";

export default function Rating() {
  return (
    <Container>
      <HeadComponent
        title={"O que dizem nossos Clientese e Parceiros"}
        subTitle={"o motivo do nosso sucesso"}
      />
      <Slider />
    </Container>
  );
}
